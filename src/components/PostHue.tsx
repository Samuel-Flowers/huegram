import { useState } from 'react'
import HuePreview from './HuePreview'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-row justify-evenly  gap-8  scrollbar-hide min-h-16'>

        <div className='flex flex-col p-6 border border-white h-64 w-full justify-center rounded-3xl  gap-10' >
            <input type="text" name="hue" id="hue" placeholder="Enter Hue..."onChange={ (event) => setColor(event.target.value) }   className="focus:outline-none focus:bg-transparent placeholder:text-white  bg-transparent text-white border p-2"/>
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-transparent hover:bg-white hover:text-[#1e293b] text-white border p-2 text-center ">Post</a>
        </div>

        <HuePreview hue={ {color, username:"addison", likes:3, isLiked: false}}/>

    </div>
  )
}

export default PostHue