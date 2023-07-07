import cuisine from '../assets/cuisine.png'
import deckandpost from '../assets/deckandpost.png'
import murderink from '../assets/murderink.png'
import playertoo from '../assets/playertoo.png'
import reciprint from '../assets/reciprint.png'
import dndmap from '../assets/dndmap.png'



const Projects = ({color, border}) => {

    const changeBorder = (e) => {
        e.target.style.borderColor = color.background
    }
    const changeBorderBack = (e) => {
        e.target.style.borderColor = color.border
    }

    return (
        <section style={{backgroundColor: color.accent, color: color.text}} id="portfolio" className="grid-3 flex">
				<h2 style={{borderColor: color.border, color: color.text}}>Portfolio</h2>
				{/* <!-- Left --> */}
				<section className="block-3 flex">
					<section className="portDesc switch">
						<h3 style={{color: color.text}}>PlayerToo</h3>
						<p style={{color: color.text}}>PlayerToo is a social media application that pairs gamers together based on the games they love and the hours they have put into those games. This full stack application is built using Node.js, MongoDB, Mongoose, EJS, JavaScript, CSS, HTML, Express.js, Passport.js, and MVC Architecture. </p>
					</section>
					<section className="port-2">
						<a href="https://clumsy-skirt-pike.cyclic.app " target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`,borderColor: color.border}} src={playertoo} alt="Gaming social network application"/></a>
					</section>	
				</section>
				{/* <!-- Right --> */}
				<section className="block-3 flex">
					<section className="port-1">
						<a href="https://hazelwize.github.io/dnd-map-maker/" target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`, borderColor: color.border}} src={dndmap} alt="Dungeons & Dragons map builder"/></a>
					</section>	
					<section className="portDesc">
						<h3 style={{color: color.text}}>DND Map Maker</h3>
						<p style={{color: color.text}}>In DND this app creates what is known as the "Fog of War". It can take any map image url and cover it in hexagon/square tiles that can be clicked to reveal the map underneath. The tiles have a "green screen" color to allow the user to overlay any image they would like when using OBS.</p>
					</section>
				</section>
				{/* <!-- Left --> */}
				<section className="block-3 flex">
					<section className="portDesc switch">
						<h3 style={{color: color.text}}>ReciPrint</h3>
						<p style={{color: color.text}}>ReciPrint is a way to share recipes through QR codes. Add your ingredients, directions, and steps to create a recipe. Click the share button to generate a QR code for sharing your creation.</p>
					</section>
					<section className="port-2">
						<a href="https://reciprint.netlify.app/ " target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`, borderColor: color.border}} src={reciprint} alt="app for creating and sharing recipes"/></a>
					</section>		
				</section>
				{/* <!-- Right --> */}
				<section className="block-3 flex">
					<section className="port-1">
						<a href="https://hazelwize.github.io/murderInk/" target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`, borderColor: color.border}} src={murderink} alt="splatoon e-sports website"/></a>
					</section>	
					<section className="portDesc">
						<h3 style={{color: color.text}}>E-Sports Team</h3>
						<p style={{color: color.text}}>This was one of my favorite projects to do. Capturing what the team wanted was a challenge at first, but after discussing their desires for the website, I was able to design something that they are proud to call their own. Not only does it showcase their team, but it also provides easily accessible data for team stategies.</p>
					</section>
				</section>
				{/* <!-- Left		 --> */}
				<section className="block-3 flex">
					<section className="portDesc switch">
						<h3 style={{color: color.text}}>Restaurant</h3>
						<p style={{color: color.text}}>With this project, my goal was to let the food speak for itself. The simplistic design was a must for showcasing the product itself. Most restaurant owners don't realize how many locals will look for a menu online, and how not having one can affect potential customers. </p>
					</section>
					<section className="port-2">
						<a href="https://hazelwize.github.io/Cuisine/" target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`, borderColor: color.border}} src={cuisine} alt="restaurant website"/></a>
					</section>	
				</section>
				{/* <!-- Right --> */}
				<section className="block-3 flex">
					<section className="port-3">
						<a href="https://www.deckandpost.com" target="_blank" rel="noreferrer"><img onMouseEnter={(e)=> changeBorder(e)} onMouseOut={(e) => changeBorderBack(e)} style={{borderRadius: `${border}%`, borderColor: color.border}} src={deckandpost} alt="construction company website"/></a>
					</section>	
					<section className="portDesc">
						<h3 style={{color: color.text}}>Craftsman</h3>
						<p style={{color: color.text}}>Deck and Post came to me in need of a company website. Their main desire was to stay in touch with their clientelle by allowing them to get quotes directly from the website. We discussed the needs of the company and the customers. The website has brought a 200% increase in business. </p>
					</section>
				</section>			
			</section>
    )
}

export default Projects