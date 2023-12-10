import kaylee from '/kaylee.jpg'
import './Profile.css' 
  
const Profile = () => {
  return (
    <div className='flex flex-col border-2 border-black p-8 items-center text-white w-96'>


        <div className="palette">

         <div style={{backgroundColor:'#ff2299'}}></div>
         <div style={{backgroundColor:'#ee2299'}}></div>
         <div style={{backgroundColor:'#dd2299'}}></div>
         <div style={{backgroundColor:'#cc2299'}}></div>
         <div style={{backgroundColor:'#bb2299'}}></div>
         
        </div>

        <h1>@kodom</h1>
        <div className="flex flex-col items-center gap-10 w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
            <h1>Likes: 48</h1>
            <h1>Likes: 49</h1>
        </div>

    </div>
  )
}

export default Profile