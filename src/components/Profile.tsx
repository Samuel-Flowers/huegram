import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 border-black p-8 m-2 items-center text-white w-96'>

        <h1>@kodom</h1>

        <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>

    </div>
  )
}

export default Profile