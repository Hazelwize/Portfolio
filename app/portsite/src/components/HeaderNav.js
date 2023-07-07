import {useState} from 'react'

const HeaderNav = ({color, showSlider, setShowSlider}) => {

    const [active, setActive] = useState(false)
	const toggleOptions = () => {
		setShowSlider(!showSlider)
		setActive(false)
	}

    return (
        <header>
			<nav style={{backgroundColor: color.section, borderColor: color.border}}className="flex navBar">
				<ul style={{backgroundColor: color.section, borderColor: color.border}}className={active ? "active flex navMenu" : 'flex navMenu'}>
					<li className="navItem"><a style={{color: color.text}} className="navLink" href="#about">About Me</a></li>
					<li className="navItem"><a style={{color: color.text}} className="navLink" href="#portfolio">Portfolio</a></li>
					<li className="navItem"><a style={{color: color.text}} className="navLink" href="#contact">Contact</a></li>
                    <li className="navItem navLink" style={{color: color.text}} onClick={() => toggleOptions()}>Customize</li>
				</ul>
				<div onClick={() => setActive(!active)} className={active ? "active hamburger" : "hamburger"}>
					<span className="bar" style={{backgroundColor: color.text}}></span>
					<span className="bar" style={{backgroundColor: color.text}}></span>
					<span className="bar" style={{backgroundColor: color.text}}></span>
				</div>
			</nav>
		</header>
    )
}

export default HeaderNav