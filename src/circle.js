import './App.css';
import {useState} from 'react';

function CircleGenerator(props) {
  
  return (
   <div className='progress-section'>
     {props.items.map((item) => (
        props.progress>=item-1?(props.items.length===item?(<><div className="circle-done"><div className='circle-label'>{item}</div></div><div></div></>):(<><div className="circle-done"><div className='circle-label'>{item}</div></div><div className='colorline'></div></>))
        :(props.items.length===item?(<><div className="circle-undone"><div className='circle-label'>{item}</div></div><div></div></>):(<><div className="circle-undone"><div className='circle-label'>{item}</div></div><div className='greyline'></div></>))
     ))}
   </div>
  );
}

export default CircleGenerator;