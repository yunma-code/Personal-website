import Education from "./education";
import "./home.css";
import { FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";
import Contact from "./contact";
import Technical from "./technical";
import Project from "./project";

const Home: React.FC = () => {

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const GitHubIcon = FaGithub as unknown as React.FC;
	const LinkedinIcon = FaLinkedin as unknown as React.FC;
	const SoundcloudIcon = FaSoundcloud as unknown as React.FC;


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
							<button onClick={() => handleScroll("education")}>Education & Experience</button>
						</li>
						<li>
							<button onClick={() => handleScroll("technicals")}> Technical Skills</button>
						</li>
						<li>
							<button onClick={() => handleScroll("projects")}>Projects</button>
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
						<p className="intro">
							My interest lies on software development and machine learning,
							with a focus on creating platforms and tools that enhance user experiences.
							Drawing from my background in music composition, I'm particularly interested in developing technologies that bridge music and technology.
						</p>
						Currently, I'm working on a machine learning project for chord recognition in a music
						recommendation system, as well as building audio DSP plugins for web-based applications.
						<br /><br />
						<span style={{ color: "white" }}>Check out my work in coding, interactive sound installation and music composition!</span>

					</h5>
					<br />
				</div>
				<br /><br /><br /><br />

				<div id="education" className="education-text">
					<Education />
				</div>

				<div id="technicals" >
					<Technical />
				</div>

				<div id="projects" className="projects-text">
					<Project />
				</div>

				<div id="contact" className="contact-text">
					<Contact />
				</div>"

			</div>
			<div className="bottom">
				<div className="icons">
					<a href="https://github.com/yunma-code" target="_blank" rel="noopener noreferrer" className="icons-icon">
						<GitHubIcon />
					</a>
					<a href="https://www.linkedin.com/in/yun-ma-4791a819b/" target="_blank" rel="noopener noreferrer" className="icons-icon">
						<LinkedinIcon />
					</a>
					<a href="https://soundcloud.com/yunmamusic" target="_blank" rel="noopener noreferrer" className="icons-icon">
						<SoundcloudIcon />
					</a>
					<br />
				</div>
				<div className="copyright">
					© 2024 Yun Ma. 
					Designed and built by Yun :)
				</div>
			</div>
			<br />
		</div>

	);
};

export default Home;