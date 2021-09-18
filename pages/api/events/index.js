import dbConnect from "../../../utils/dbConnect";
import Event from "./../../../models/Event";

export default async function handler(req, res) {
    await dbConnect();

    const { method, body, query, headers } = req;
    if (method === "POST" && headers.client_token === process.env.CLIENT_TOKEN) {
        const newData = { 
            name: body.name,
            image: body.image,
            description: body.description,
            speakers: body.speakers,
            isInternal: body.isInternal,
            tags: body.tags,
            venue: body.venue,
            startDate: new Date(
                        parseInt(body.startDate.split("/")[2]), 
                        parseInt(body.startDate.split("/")[1]) - 1, 
                        parseInt(body.startDate.split("/")[0]),
                        parseInt(body.startTime.split(":")[0]),
                        parseInt(body.startTime.split(":")[1])
                        ),
        };
        if(body.platform) newData.platform = body.platform;
        if(body.registerLink) newData.registerLink = body.registerLink;
        if(body.endDate) newData.endDate 
                = new Date(
                    parseInt(body.endDate.split("/")[2]), 
                    parseInt(body.endDate.split("/")[1]) - 1, 
                    parseInt(body.endDate.split("/")[0]), 
                    parseInt(body.endTime.split(":")[0]),
                    parseInt(body.endTime.split(":")[1])
                );

        const events = new Event(newData);
        events.save();
        res.status(200).json({ success: true, msg: "Event added" });
    } else if (method === "GET") {
        try {
            // query for past events
            let eventQuery = {};
            if (query.path === "past") {
                eventQuery = {
                    startDate: {
                        $lt: new Date()
                    }
                }
            } 
            // query for upcoming events
            else if (query.path === "upcoming") {
                eventQuery = {
                    endDate: {
                        $gt: new Date()
                    }
                }
            } 
            // query for current events
            else if (query.path === "current") {
                eventQuery = {
                    startDate: {
                        $lte: new Date()
                    },
                    endDate: {
                        $gte: new Date()
                    }
                }
            } else {
                res.status(500).json({ success: false });
            }
            const eventsData = await Event.find(eventQuery);
            const totalEvents = eventsData.length;
            const events = await Event.find(eventQuery)
            .sort("-endDate")
            .limit(6)
            .skip(6 * parseInt(query.page));
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
            res.setHeader(
              'Access-Control-Allow-Headers',
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            );
            res.status(200).json({ success: true, data: events, length: totalEvents });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(500).json({ success: false });
    }   
}