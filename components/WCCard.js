import { MakeCard } from "../functions/MakeCard";

const WCCard = (props) => {
  const socialInfo = [];
  for (let item in props.social) {
    socialInfo.push(item);
  }
  const socialData = socialInfo.map((key) => {
    return MakeCard(key, props.social[key], "text-xl", "mx-3");
  });
  return (
    <div className="h-40 w-full px-4 rounded-lg flex items-center hover:shadow-lg">
        <img className="h-32 w-32 md:h-36 md:w-36 object-center mx-auto rounded-full" src={props.photo} alt={props.name} />
        <div className="w-full ml-2 flex flex-col items-start">
            <p className="text-2xl text-left font-semibold text-gray-200 px-2">{props.name}</p>
            <div className="my-1 text-left">{socialData}</div>
        </div>
    </div>
  );
};

export default WCCard;
