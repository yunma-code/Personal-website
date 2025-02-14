import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Typewriter from "../typewriter";

const Home: React.FC =() => {
	const [showContent, setShowContent] = useState<boolean>(false);
	// const homeStyle = {
	// 	backgroundImage: "url('/images/background.jpeg')",
	// 	backgroundSize: "cover",
	// 	backgroundPosition: "center",
	// 	height: "100vh"
	// };

	return(
		// <div className="home-container" style={ homeStyle }>
		<div className="home-container">
			<div className="content-box">
				<h1>
					Yun Ma
					<h4>Bridging music and tech</h4>
				</h1>
				<div className="content-text">
					<br />
					-- I'm a software developer and musician based in Boston, passionate about  <br />
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Web development</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Cloud computing</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Machine Learning </span> 
					and <span style={{ color: '#2980b9', fontWeight: 'bold'}}> Music Technology.</span>
					
					<br />Check out my work in both coding and music composition!
				</div>
			</div>
			

			{/* <motion.div	
				className="home-bubble-image"
				layout
				initial={{ scale: 1}}
				whileHover={{ scale: 1 }}
				whileTap={{ scale: 0.7 }}
				onClick={() => setShowContent(!showContent)}
				style={{
					backgroundImage: `url("/images/homeimg.jpg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
			</motion.div> */}

			<div className="technical-skills">
				<h3>Technical Skills</h3>
				<li><b>Programming Languages: </b> Java, JavaScript, TypeScript, C++, Python, SQL, HTML/CSS</li> 
				<li><b>Frameworks & Libraries: </b> React, Node.js, REST APIs</li>
				<li><b>Database Management: </b> MySQL, NoSQL, MongoDB</li>
				<li><b>Cloud Platforms: </b> AWS</li>
				<li><b>Tools & DevOps: </b> Linux, Bash, Git, CMake, Makefile</li>
				<li><b>Machine Learning: </b> PyTorch, Numpy, scikit-learn, pandas, Matplotlib</li>
		</div>


			{/* {showContent && (
				<motion.div
					className="welcome-text"
          animate={{ opacity: showContent ? 1: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
				>
					<div className="typewriter-container">
						<Typewriter />
					</div>
					
					
				</motion.div>
			)} */}
		</div>
	);
};

export default Home;