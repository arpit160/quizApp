import './App.css';
import Header from './components/header'
import Navigator from './components/navigator'
import Timer from './components/timer'
import Question from './components/question'
import { useEffect, useState } from 'react';

function App() {

  const[gid,setGid]=useState('1');
  const getId=(id=1)=>
  {
    setGid(id);
  }
 
  useEffect(()=>
  {
  },[gid])

  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Question id={gid}/>
      <Navigator getId={getId}/>
    </div>
  );
}

export default App;
