import './App.css';
import Main from './components/Main';
import Slider from './components/Slider'
import Details from './components/Details';
import Projects from './components/Projects';
import {useState, useEffect} from 'react'

function App() {  
  
  const [colorValue, setColorValue] = useState(1)
  const [borderValue, setBorderValue] = useState(1)
  const [borderRadius, setBorderRadius] = useState()
  const [showSlider, setShowSlider] = useState(false)
  const [color, setColor] = useState({})
  
  useEffect(() => {
    if(colorValue < 2)return
    setColor({
        text: `hsl(${(colorValue + 120 > 360 ? colorValue - 239: colorValue + 120)}, 35%, 50%)`,
        border: `hsl(${(colorValue + 120 > 360 ? colorValue - 239: colorValue + 120)}, 35%, 50%)`,
        section: `hsl(${(colorValue)}, 35%, 50%)`,
        background: `hsl(${(colorValue + 240 > 360 ? colorValue - 119: colorValue + 240)}, 35%, 50%)`,
        accent: `hsl(${(colorValue + 30 > 360 ? colorValue - 329: colorValue + 30)}, 35%, 50%)`,
    })
  },[colorValue])

  useEffect(() => {
    if(borderValue === 1) return 
    setBorderRadius(borderValue)
  },[borderValue])



 

  return (
    <div style={{backgroundColor:color.background}} className="App">
      <div className="wrapper">
        {showSlider && <Slider 
            color={color} 
            sliderTitle={"Color Scheme"} 
            state={colorValue} 
            setState={setColorValue} 
            sliderMin={1} 
            sliderMax={360}
        />}
        {showSlider && <Slider 
            color={color} 
            sliderTitle={"Corner Curve"} 
            state={borderValue} 
            setState={setBorderValue} 
            sliderMin={1} 
            sliderMax={22}
        />}
        <Main color={color} border={borderRadius} showSlider={showSlider} setShowSlider={setShowSlider}/>
        <Details color={color} border={borderRadius}/>
        <Projects color={color} border={borderRadius}/>
      </div>
    </div>
  );
}





export default App;
