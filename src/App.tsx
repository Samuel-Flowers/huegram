//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import HueObject from './HueObject'
import Header from './components/Header'


function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [currentUser] = useState({
    username: "addison",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });


  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
    const newHue = {color, username: currentUser.username, id: hues.length+1 , likes:0, isLiked: false};
    setHues( [newHue, ...hues ] );
    console.log(hues)
  }

  const toggleLikeForHue = (id?:number) =>
  {
    const newHues = [...hues]
    const hue = newHues.find(h => h.id == id)
    if(hue){
      hue.isLiked = !hue.isLiked
      setHues( newHues )
    }

    }
  
  return (
    
    <div className='flex flex-col bg-slate-800 '>
      {/* <Menu /> */}
      <Header/>
      <div className='flex h-screen'>
      <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue}/>

      <Profile />
      </div>
    </div>
  )

}

export default App;