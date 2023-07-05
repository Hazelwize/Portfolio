import HeaderNav from './HeaderNav'

const Main = ({color, showSlider, setShowSlider}) => {
    return (
        <div className="backGrid-1">
			<HeaderNav color={color} showSlider={showSlider} setShowSlider={setShowSlider}/>
			<section style={{borderColor: color.border}}className="flex grid-1">
				<section style={{borderColor: color.border, backgroundColor: color.section}} className="block-1 ">
					<h1 style={{color: color.text}}>Welcome to your digital journey!</h1>
					<p style={{color: color.text}}>Hello, my name is Micah aka Hazelwize. I am a software engineer with a passion for creating full stack web applications. I enjoy bringing local businesses into the digital age with responsive and intuitive web design. </p>
				</section>
				<section className="block-1-2">
				
				</section>	
			</section>
		</div>	
    )
}

export default Main