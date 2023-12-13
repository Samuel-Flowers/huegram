// HuePosts.tsx

import React, { useEffect, useState } from 'react';

interface MyJsonData {
  username: string;
  likes: number;
  // Add other fields if necessary
}

const HuePosts: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('sampleData.json');
        const data = await response.json();
        // Count occurrences of the username "abbieV" in the entire JSON object
        const count = data.reduce((acc: number, currentValue: MyJsonData) => {
          const containsUser = currentValue.username === 'addison';
          const likeCount = currentValue.likes;
          return acc + (containsUser && likeCount ? 1 : 0);
        }, 0);
        setCounter(count);
      }

      catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center text-2xl'>
      <h1>Likes</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default HuePosts;
