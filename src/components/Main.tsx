import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'


interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = ({hues, addHue} : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8  p-5 overflow-y-auto hide-scrollbar'>

        <PostHue addHue={addHue}/>


        {hues.map( (hue) => ( 
            
            <Hue hue={hue}/>
       ))}

        

    </div>
  )
}

export default Main