//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

interface Hue {
  color: string;
  username: string;
  id: number;
  likes: number;
}

interface User {
  username: string;
  likes: number;
  hues:Hue[];
}
function App() {
  const [hues, setHues] = useState<Hue[]>([]);

  const [currentUser] = useState<User>({
    username: 'kavery',
    likes: 58,
    hues: [{ id: 36, color: '#ffa510', username: 'kavery', likes: 15 }],
  });

  useEffect(() => {
    fetch('sampleData.json')
      .then((res) => res.json())
      .then((data) =>
        setHues(data.map((item: { color: string }) => ({ ...item, color: item.color })))
      );
  }, []);

  const addNewHue = (color: string) => {
    const newHue: Hue = {
      color,
      username: currentUser.username,
      id: hues.length + 1,
      likes: 0,
    };
    setHues([newHue, ...hues]);
  };

  return (
    <div className="flex bg-slate-800 h-screen">
      <Main hues={hues} addHue={addNewHue} />
      <Profile />
    </div>
  );
}

export default App;