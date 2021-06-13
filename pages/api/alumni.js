import dbConnect from "../../utils/dbConnect";
import Alumni from "../../models/Alumni";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const alumni = await Alumni.find({});
      res.status(200).json({ success: true, data: alumni });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else if (method === "POST") {
    try {
      const {
        name,
        photo,
        position,
        year,
        whereabouts,
        linkedin,
        webpage,
        email,
        github,
        blog,
        twitter,
        facebook,
        instagram,
        youtube,
      } = req.body;

      const newBoardObject = {
        name: name,
        photo: photo,
        position: position,
        social: {},
      };
      if (youtube) newBoardObject.social.youtube = youtube;
      if (twitter) newBoardObject.social.twitter = twitter;
      if (facebook) newBoardObject.social.facebook = facebook;
      if (linkedin) newBoardObject.social.linkedin = linkedin;
      if (instagram) newBoardObject.social.instagram = instagram;
      if (blog) newBoardObject.social.blog = blog;
      if (webpage) newBoardObject.social.webpage = webpage;
      if (github) newBoardObject.social.github = github;
      if (email) newBoardObject.social.email = email;

      const addMember = new Board(newBoardObject);
      await addMember.save();
      res.status(201).json(addMember);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(500).json({ success: false });
  }
}
