import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "../typewriter";
import "./about.css";

const About: React.FC =() => {
	const [showContent, setShowContent] = useState<boolean>(false);
	// const homeStyle = {
	// 	backgroundImage: "url('/images/background.jpeg')",
	// 	backgroundSize: "cover",
	// 	backgroundPosition: "center",
	// 	height: "100vh"
	// };

	return(
		// <div className="home-container" style={ homeStyle }>
		<div className="about-container">
			<div className="about-box">
				<div className="about-text">
				<h1> Yun Ma</h1>
					Hi --I'm a software developer and musician based in Boston, passionate about  <br />
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Web development</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Cloud computing</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Machine Learning </span> 
					and <span style={{ color: '#2980b9', fontWeight: 'bold'}}> Music Technology.</span>
					<p>
					<br />Transitioning from a music background to computer science, I aim to combine my skills and creative 
					problem-solving to develop user-friendly platforms and innovative audio tools. 
					<br />Check out my work in both coding and music composition!
					</p>
				</div>
			</div>

			<motion.div	
				className="about-bubble-image"
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
			</motion.div>

			<div className="education-box">
				<div className="education-content">
					<h2>Education</h2>
					<p>2023-2026 Northeastern University - MSCS in Computer Science</p>
					<p>2021-2023 University of Michigan, Ann Arbor - MM in Music Theory and Composition</p>
					<p>2017-2021 Boston Conservatory at Berklee - BM in Music Theory and Composition </p>
				</div>
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

export default About;