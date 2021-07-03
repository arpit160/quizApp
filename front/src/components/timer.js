import React from 'react'
import './styles/timer.css' 
import Countdown from 'react-countdown';
import {useEffect,useState} from 'react'

const Timer=(props)=>
{
    const oncomplete=()=>
    {
       console.log('done')
    }
    useEffect(()=>
    {
      const temp=Date.now()+10000;
      localStorage.setItem('currentTime',temp);
    },[])
    return(
        <div>
           <Countdown  className='timer' date={JSON.parse(localStorage.getItem('currentTime'))} onComplete={oncomplete} />
        </div>
    );
}

export default Timer;