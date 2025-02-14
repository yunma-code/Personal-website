import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Typewriter from "./typewriter";

const Home: React.FC =() => {
	const [showContent, setShowContent] = useState<boolean>(false);

	return(
		<div className="home-container">

			<div className="content-box">
				<div className="content-text">
					Hi --I'm a software developer and musician based in Boston, passionate about  
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Web development, Cloud computing, AI </span> 
					and <span style={{ color: '#2980b9', fontWeight: 'bold'}}> Music Technology.</span>
					<p>
					<br />Transitioning from a music background to computer science, I aim to combine my skills and creative 
					problem-solving to develop user-friendly platforms and innovative audio tools.
					</p>
					<br />Check out my work in both coding and music composition!
				</div>
			</div>

			<motion.div	
				className="home-bubble-image"
				layout
				initial={{ scale: 1}}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setShowContent(!showContent)}
				style={{
					backgroundImage: `url("/images/homeimg.jpg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
			</motion.div>

			<div className="technical-skills">
				<h2>Technical Skills</h2>
				<li><b>Programming Languages: </b> Java, JavaScript, TypeScript, C++, Python, SQL, HTML/CSS</li> 
				<li><b>Frameworks: </b> React, Node.js,  </li>
				<li><b>Tools: </b></li>
				<li><b>Machine Learning: </b></li>
			</div>

			{showContent && (
				<motion.div
					className="welcome-text"
          animate={{ opacity: showContent ? 1: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
				>
					<div className="typewriter-container">
						<Typewriter />
					</div>
					
					
				</motion.div>
			)}
		</div>
	);
};

export default Home;