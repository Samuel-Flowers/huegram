import HueObject from "../HueObject";

interface Props {
  hue: HueObject;
}

function getTextColor(): string
{

  return "black";
}

const HuePreview = ({hue}: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: hue.color }}
    >
      <div className="flex flex-row text-center gap-2 justify-between items-center bg-black text-white p-2 rounded-b-2xl">
        <p className={`text-${getTextColor()} text-2xl opacity-80`}>{hue.color}</p>
      </div>


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>
      </div>
    </div>

  )
}

export default HuePreview