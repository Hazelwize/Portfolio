import './App.css';
import Main from './components/Main';
import Slider from './components/Slider'
import {useState, useEffect} from 'react'

function App() {  
  
  const [colorValue, setColorValue] = useState(1)
  const [showSlider, setShowSlider] = useState(false)
  const [color, setColor] = useState({})

  useEffect(() => {
    if(colorValue === 1)return
    setColor({
      text: `hsl(${(colorValue + 120 > 360 ? colorValue - 240: colorValue + 120)}, 35%, 50%)`,
      border: `hsl(${(colorValue + 120 > 360 ? colorValue - 240: colorValue + 120)}, 35%, 50%)`,
      section: `hsl(${(colorValue)}, 35%, 50%)`,
      background: `hsl(${(colorValue + 240 > 360 ? colorValue - 120: colorValue + 240)}, 35%, 50%)`,
      accent: `hsl(${colorValue}, 35%, 16%)`,
    })
  },[colorValue])

  

  return (
    <div style={{backgroundColor:color.background}} className="App">
      <div className="wrapper">
        {showSlider && <Slider color={color} setColorValue={setColorValue}/>}
        <Main color={color} showSlider={showSlider} setShowSlider={setShowSlider}/>
      </div>
    </div>
  );
}





export default App;
