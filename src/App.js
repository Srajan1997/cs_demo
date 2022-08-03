import './App.css';
import {useState} from 'react';
import {Slide1,Slide2,Slide3,Slide4} from './slides.js';
import CircleGenerator from './circle.js';
import { Button } from '@mui/material';
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    var currSlide = slideIndex<3?slideIndex+1:3;
    console.log(currSlide)
    setSlideIndex(currSlide);
  }
  return (
    <div className="App">
      <CircleGenerator progress={slideIndex} items={[1,2,3,4]} />
       {slideIndex===0&&<Slide1 />}
       {slideIndex===1&&<Slide2 />}
       {slideIndex===2&&<Slide3 />}
       {slideIndex===3&&<Slide4 />}
       <button className="common-button" onClick={nextSlide}>{slideIndex===3?'Launch Eden':'Create Workspace'}</button>
    </div>
  
  );
}

export default App;
