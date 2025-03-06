import React, { useState } from "react";
import Education from "./education";
import "./home.css";

const Home: React.FC = () => {

	return (
		<div className="home-container">
			<div className="left-box">
				<div className="content-text">
					<h1>
						Yun Ma
					</h1>
					<h4>Bridging music and tech</h4>

					<br />
				</div>

				<div className="navigation-links">
					<ul>
						<li>
							<a href="#technical-skills"> Technical Skills</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#education">Education & Experience</a>
						</li>
					</ul>
				</div>

			</div>


			<div className="right-box">
				<div className="intro-text ">
					<h5>
						I'm a software developer and musician based in Boston, passionate
						about{" "} <br />
						<span style={{ color: "white" }}>
							{" "}
							Web development
						</span>
						, <span style={{ color: "white" }}>
							Cloud computing
						</span>
						,{" "}
						<span style={{ color: "white" }}>
							Machine Learning
						</span>{" "}
						and{" "}
						<span style={{ color: "white" }}>
							Music Technology.
						</span>
						<br />
						<p className="mb-6">
							My interest lies on software development and machine learning, with a focus on creating platforms and tools that enhance user experiences. Drawing from my background in music composition, I'm particularly interested in developing technologies that bridge music and technology.
						</p>
						Currently, I'm working on a machine learning project for chord recognition in a music recommendation system, as well as building audio DSP plugins for web-based applications.
						<br />
						Check out my work in coding, interactive sound installation and music composition!
					</h5>
					<br />
				</div>
				<div id="technical-skills" className="technical-text">
					<h3>Technical Skills</h3>
					<div><span style={{ color: "white" }}>Programming Languages: </span>
						Java, JavaScript, TypeScript, C++, Python, HTML/CSS, SQL</div>
					<div><span style={{ color: "white" }}>Frameworks & Libraries: </span>
						React, Node.js, Next.js, REST APIs</div>
					<div><span style={{ color: "white" }}>Database Management: </span>
						MySQL, NoSQL, MongoDB, PostgreSQL</div>
					<div><span style={{ color: "white" }}>Cloud Platforms: </span>
						AWS Cloud Architecture, AWS Machine Learning</div>
					<div><span style={{ color: "white" }}>Tools & DevOps: </span>
						Linux, Bash, Git, CMake, Makefile</div>
					<div><span style={{ color: "white" }}>Machine Learning: </span>
						PyTorch, scikit-learn, Numpy, pandas, Matplotlib</div>
					<div><span style={{ color: "white" }}>Audio Tools: </span>DAW, Processing, MaxMSP</div>
				</div>

				<div id="projects" className="projects-text">
					<h3>Projects</h3>
					<div>Project 1: </div>
					<div>Project 2: </div>
					<div>Project 3: </div>

				</div>


				<div id="education" className="education-text">
					<Education />
				</div>


			</div>
		</div>
	);
};

export default Home;