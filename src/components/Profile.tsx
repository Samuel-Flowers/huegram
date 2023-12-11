import kaylee from '/kaylee.jpg'
import React, { useEffect, useState } from 'react'
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
    <div className='flex flex-col border-2 border-black p-8 items-center text-white w-96'>

      <div className="palette">
        {data
          .filter((item) => item.username === 'addison') // Filter based on username
          .map((item) => (
            <div key={item.id} style={{ backgroundColor: item.color }}></div>
          ))}
      </div>

        <h1>@addison</h1>
        <div className="flex flex-col items-center gap-10 w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
            <Likes/>
            <HuesPosted/>
        </div>

    </div>
  )
}

export default Profile