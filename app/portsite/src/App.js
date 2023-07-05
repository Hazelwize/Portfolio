import './App.css';
import Main from './components/Main';
import Slider from './components/Slider'
import {useState, useEffect} from 'react'

function App() {  
  
  const [colorValue, setColorValue] = useState(1)
  const [showSlider, setShowSlider] = useState(false)
  const [color, setColor] = useState({})

  useEffect(() => {

    setColor({
      text: `hsl(${(colorValue + 120 > 360 ? colorValue - 240: colorValue + 120)}, 50%, 50%)`,
      border: `hsl(${(colorValue + 120 > 360 ? colorValue - 240: colorValue + 120)}, 50%, 50%)`,
      section: `hsl(${(colorValue)}, 50%, 50%)`,
      background: `hsl(${(colorValue + 240 > 360 ? colorValue - 120: colorValue + 240)}, 50%, 50%)`,
      accent: `hsl(${colorValue}, 60%, 16%)`,
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
