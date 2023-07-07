const Slider = ({color, sliderTitle, state, setState, sliderMin, sliderMax}) => {
    return (
        <div style={{backgroundColor: color.section, borderColor: color.border, color: color.text}}className="slideWrapper">
            <div className="slideContainer">
                <label className='sliderLabel'>
                    {sliderTitle}
                    <input type="range" min={sliderMin} max={sliderMax} value={state} onChange={(e) => setState(e.target.value)} className="slider" id="myRange"></input>
                </label>
            </div>
        </div>
    )
}

export default Slider