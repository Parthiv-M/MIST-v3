const AnnouncementCard = (props) => {

  return (
      <div className="md:my-2 my-2 p-5 min-h-44 h-auto md:w-11/12 border-r border-t border-b border-l rounded-lg border-white hover:shadow-lg hover:border-opacity-40">
        <div className="text-left text-xl font-semibold">
            <p>{props.date}</p>
        </div> 
        <h1 className="md:text-4xl text-left emphasis-heading blue-gradient-text md:h-3/6 text-3xl pb-5">{props.heading}</h1>
        <div className="md:text-right text-left">
            <button
              type="button"
              className="w-24 gradient-button text-white text-xl text-base font-semibold rounded-lg shadow-md hover:bg-green-600 p-2"
              onClick={() => props.handleUpdate(true, props)}
            >
              VIEW 
            </button>
        </div>
        <style jsx>{`
        .gradient-button{
          background: linear-gradient(
            to right,
            #2196f3,
            #26c6da,
            #26c6da
          );
        }
      `}</style>
      </div>
  );
};

export default AnnouncementCard;
