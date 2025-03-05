import React, { useState } from "react";
import "./home.css";

const Home: React.FC = () => {

	return (
		<div className="home-container">
			<div className="left-box">
				<div className="content-text">
					<h1>
						Yun Ma
						<h4>Bridging music and tech</h4>
					</h1>
					<br />
				</div>
				<div className="navigation-links">
					<ul>
						<li>
							<a href="#technical-skills">Technical Skills</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#education">Education</a>
						</li>
					</ul>
				</div>

			</div>


			<div className="right-box">
				<div className="content-text">
					<h5>
						I'm a software developer and musician based in Boston, passionate
						about{" "}
						<span style={{ color: "#2980b9", fontWeight: "bold" }}>
							{" "}
							Web development
						</span>
						, <span style={{ color: "#2980b9", fontWeight: "bold" }}>
							Cloud computing
						</span>
						,{" "}
						<span style={{ color: "#2980b9", fontWeight: "bold" }}>
							Machine Learning
						</span>{" "}
						and{" "}
						<span style={{ color: "#2980b9", fontWeight: "bold" }}>
							Music Technology.
						</span>
						<br />
						Check out my work in both coding and music composition!
					</h5>
					<br />
				</div>
				<div id="technical-skills" className="technical-text">
					<h3>Technical Skills</h3>
					<div>Programming Languages: Java, JavaScript, TypeScript, C++, Python, SQL, HTML/CSS</div>
					<div>Frameworks & Libraries: React, Node.js, REST APIs</div>
					<div>Database Management: MySQL, NoSQL, MongoDB</div>
					<div>Cloud Platforms: AWS</div>
					<div>Tools & DevOps: Linux, Bash, Git, CMake, Makefile</div>
					<div>Machine Learning: PyTorch, Numpy, scikit-learn, pandas, Matplotlib</div>
				</div>

				<div id="projects" className="projects-text">
					<h3>Projects</h3>
					<div>Project 1: </div>
					<div>Project 2: </div>
					<div>Project 3: </div>
					
				</div>

				<div id="education" className="education-text">
					<h3>Education</h3>
					<div>Degree:</div>
					<div>Year: </div>
				</div>

			</div>
		</div>
	);
};

export default Home;