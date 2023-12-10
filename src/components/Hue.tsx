import HueObject from "../HueObject";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';




interface Props {
  hue: HueObject;
  toggleLike?:(id?:number) => void;
}

function getTextColor(): string
{

  return "black ";
}

const Hue = ({hue, toggleLike}: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: hue.color }}
      onClick={()=>toggleLike && toggleLike(hue.id)}
    >
      <div className="flex flex-row text-center gap-2 justify-between items-center bg-black text-white p-2 rounded-b-2xl">
        <p className={`text-${getTextColor()} text-2xl opacity-80`}>{hue.color}</p>

        {/* {hue.isLiked && <span>HEART</span>}

        {hue.isLiked && <span>NO HEART</span>} */}

        {hue.isLiked ? <FontAwesomeIcon icon={solidHeart} className="text-2xl"/> : <FontAwesomeIcon icon={regularHeart} className="text-2xl" />}
      </div>


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;