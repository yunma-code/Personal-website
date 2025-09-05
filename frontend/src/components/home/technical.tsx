import "../../tailwind.css";
import { BiCaretDown } from "react-icons/bi";
import { FaReact, FaToolbox } from "react-icons/fa";
import { SiPytorch, SiDocker, SiKubernetes, SiAmazon } from "react-icons/si";
import { LuAudioLines } from "react-icons/lu";
import { MdDeveloperMode } from "react-icons/md";

const Technical = () => {
	const Downicon = BiCaretDown as unknown as React.FC;
	const Reacticon = FaReact as unknown as React.FC;
	const Mlicon = SiPytorch as unknown as React.FC;
	const Tool = FaToolbox as unknown as React.FC;

	// Custom placeholder icons using text initials
	const LangGraphIcon = () => (
		<div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
			LG
		</div>
	);
	const LangSmithIcon = () => (
		<div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
			LS
		</div>
	);

	return (
		<>
			<h1 className="text-3xl font-bold mb-4 text-white">Technical Skills</h1>
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg flex-col">
				{/* Full Stack */}
				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Reacticon />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Full Stack Web Development</h1>
					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>
					<div className="flex flex-wrap gap-1 mt-4">
						{["React", "JavaScript", "TypeScript", "Node.js", "Next.js", "REST APIs", "Tailwind CSS", "HTML/CSS", "Postman", "MongoDB", "SQL", "WebAssembly", "WebGL", "Web Audio API"].map((tech) => (
							<p key={tech} className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm mt-2">{tech}</p>
						))}
					</div>
				</div>
				<br />

				{/* Machine Learning & AI */}
				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Mlicon />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Machine Learning & AI</h1>
					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>
					<div className="flex flex-wrap gap-1 mt-4">
						{["Python", "Pytorch", "scikit-learn", "Postgre SQL", "Numpy", "Pandas", "Matplotlib", "Google ADK"].map((tool) => (
							<p key={tool} className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm mt-2">{tool}</p>
						))}
						<p className="flex items-center gap-1 bg-gray-300 text-black px-3 py-1 rounded-full text-sm mt-2">
							LangGraph
						</p>
						<p className="flex items-center gap-1 bg-gray-300 text-black px-3 py-1 rounded-full text-sm mt-2">
							LangSmith
						</p>
					</div>
				</div>
				<br />

				{/* Cloud & Dev Tools */}
				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Tool />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Cloud Platform & Dev Tools</h1>
					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>
					<div className="flex flex-wrap gap-1 mt-4">
						{[
							"AWS Cloud Architecture",
							"AWS Machine Learning",
							"AWS ECS",
							"AWS ECR",
							"AWS Lambda",
							"AWS DynamoDB",
							"AWS SageMaker",
							"Linux",
							"Bash",
							"Git",
							"Docker",
							"Kubernetes",
							"CI/CD", "GCP", "Firebase"
						].map((tool) => (
							<p key={tool} className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm mt-2">{tool}</p>
						))}
					</div>
				</div>
				<br />
			</div>
		</>
	);
};

export default Technical;
