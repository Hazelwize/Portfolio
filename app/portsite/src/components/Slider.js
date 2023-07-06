const Slider = ({color, colorValue, setColorValue}) => {
    return (
        <div style={{backgroundColor: color.section, borderColor: color.border, color: color.text}}className="slideWrapper">
            <div className="slideContainer">
                <h3 className="sliderTitle" style={{color: color.text}}>Slide to change the color scheme:</h3>
                <input type="range" min="1" max="360" value={colorValue} onChange={(e) => setColorValue(e.target.value)} className="slider" id="myRange"></input>
            </div>
        </div>
    )
}

export default Slider