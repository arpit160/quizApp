import React from 'react'
import './styles/navigation.css' 

const Navigator=(props)=>
{
    
    const fun=(val)=>
    {
        console.log('in navigator',val);
        props.getId(val);
    }
    return(
        <div className='navigation'>
           <span onClick={()=>fun(1)}>1</span><span onClick={()=>fun(2)}>2</span>
           <span onClick={()=>fun(3)}>3</span><span onClick={()=>fun(4)}>4</span>
           <span onClick={()=>fun(5)}>5</span><span onClick={()=>fun(6)}>6</span>
           <span onClick={()=>fun(7)}>7</span><span onClick={()=>fun(8)}>8</span>
           <span onClick={()=>fun(9)}>9</span><span onClick={()=>fun(10)}>10</span>
        </div>
    );
}

export default  Navigator;