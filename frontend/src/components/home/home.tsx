import Education from "./education";
import "./home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from "./contact";

const Home: React.FC = () => {

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const GitHubIcon = FaGithub as unknown as React.FC;
	const LinkedinIcon = FaLinkedin as unknown as React.FC;


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
							<button onClick={() => handleScroll("about")}>About</button>
						</li>
						<li>
							<button onClick={() => handleScroll("technical-skills")}> Technical Skills</button>
						</li>
						<li>
							<button onClick={() => handleScroll("projects")}>Projects</button>
						</li>
						<li>
							<button onClick={() => handleScroll("education")}>Education & Experience</button>
						</li>
						<li>
							<button onClick={() => handleScroll("contact")}>Contact</button>
						</li>
					</ul>
				</div>
			</div>

			<div className="right-box">
				<div id="about" className="intro-text ">
					<br />
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
						<br />
						<p className="mb-6">
							My interest lies on software development and machine learning, with a focus on creating platforms and tools that enhance user experiences. Drawing from my background in music composition, I'm particularly interested in developing technologies that bridge music and technology.
						</p>
						Currently, I'm working on a machine learning project for chord recognition in a music recommendation system, as well as building audio DSP plugins for web-based applications.
						<br />
						<span style={{ color: "white" }}>Check out my work in coding, interactive sound installation and music composition!</span>

					</h5>
					<br />
				</div>
				<br /><br /><br /><br />
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

				<div id="contact" className="contact-text">
					<Contact />
				</div>"

			</div>

			<div className="icons">
				<a href="https://github.com/yunma-code" target="_blank" rel="noopener noreferrer" className="icons-icon">
					<GitHubIcon />
				</a>
				<a href="https://www.linkedin.com/in/yun-ma-4791a819b/" target="_blank" rel="noopener noreferrer" className="icons-icon">
					<LinkedinIcon />
				</a>
			</div>
			
			


		</div>

	);
};

export default Home;