import React, { useState } from "react";
import "./home.css";

const Home: React.FC =() => {

	return(
		<div className="home-container">
			<div className="content-box">
				<div className="content-text">
					<h1>
						Yun Ma
						<h4>Bridging music and tech</h4>
					</h1>
					<br />
					-- I'm a software developer and musician based in Boston, passionate about  <br />
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Web development</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Cloud computing</span>,
					<span style={{ color: '#2980b9', fontWeight: 'bold'}}> Machine Learning </span> 
					and <span style={{ color: '#2980b9', fontWeight: 'bold'}}> Music Technology.</span>
					
					<br />Check out my work in both coding and music composition!
				</div>
			</div>
		

			<div className="technical-box">
				<div className="technical-text">
					<h3>Technical Skills</h3>
					<div>Programming Languages: Java, JavaScript, TypeScript, C++, Python, SQL, HTML/CSS</div>
					<div>Frameworks & Libraries: React, Node.js, REST APIs</div>
					<div>Database Management: MySQL, NoSQL, MongoDB</div>
					<div>Cloud Platforms: AWS</div>
					<div>Tools & DevOps: Linux, Bash, Git, CMake, Makefile</div>
					<div>Machine Learning: PyTorch, Numpy, scikit-learn, pandas, Matplotlib</div>
				</div>
			</div>



		</div>
	);
};

export default Home;