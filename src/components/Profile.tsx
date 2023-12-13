import kaylee from '/kaylee.jpg'
import  { useEffect, useState } from 'react'
import './Profile.css' 
import Likes from './Likes'
import HuesPosted from './HuesPosted'
  
interface UserData {
  id: number;
  color: string;
  username: string;
}

const Profile = () => {

    const [data, setData] = useState<UserData[]>([]); // Add type annotation for data state variable
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('sampleData.json');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className='flex  flex-col bg-gradient-to-br from-[#1e293b] via-[#1e456e] to-[#1e587b] border-l-2 border-white p-7 items-center text-white w-56'>

      <div className="palette">
        {data
          .filter((item) => item.username === 'addison') // Filter based on username
          .map((item) => (
            <div key={item.id} style={{ backgroundColor: item.color }}></div>
          ))}
      </div>

        <h1 className='text-xl my-4'>@addison</h1>
        <div className="flex flex-col items-center gap-6 w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
            <Likes/>
            <HuesPosted/>
        </div>

    </div>
  )
}

export default Profile