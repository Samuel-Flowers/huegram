// HuePosts.tsx

import React, { useEffect, useState } from 'react';

interface MyJsonData {
  username: string;
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
          
          return acc + (containsUser ? 1 : 0);
        }, 0);
        console.log(count)
        setCounter(count);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hues Posted: {counter}</h1>
    </div>
  );
};

export default HuePosts;
