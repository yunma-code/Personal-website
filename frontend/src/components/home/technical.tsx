import "../../tailwind.css";
import { BiCaretDown } from "react-icons/bi";
import { FaReact, FaToolbox } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { LuAudioLines } from "react-icons/lu";

const Technical = () => {
	const Downicon = BiCaretDown as unknown as React.FC;
	const Reacticon = FaReact as unknown as React.FC;
	const Mlicon = SiPytorch as unknown as React.FC;
	const Audioicon = LuAudioLines as unknown as React.FC;
	const Tool = FaToolbox as unknown as React.FC;


	return (
		<>
		<h1 className="text-3xl font-bold mb-4 text-white">Technical Skills</h1>
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg flex-col">
				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Reacticon />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Full Stack Web Development</h1>

					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>

					<div className="flex flex-wrap gap-1 mt-4">
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">React</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">JavaScript</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">TypeScript</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit"> Node.js</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Next.js</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">REST APIs</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Tailwind CSS</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">HTML/CSS</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Postman</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">MongoDB</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">SQL</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">WebAssembly</p>
					</div>
				</div>
				<br />

				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Mlicon />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Machine Learning</h1>

					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>


					<div className="flex flex-wrap gap-1 mt-4">
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Python</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Pytorch</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">scikit-learn</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Postgre SQL</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Numpy</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Pandas</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">Matplotlib</p>
					</div>
				</div>
				<br/>

				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Audioicon />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Audio Processing</h1>

					<h1 className="text-base gap-2 text-white flex">
						Tech Stack <Downicon />
					</h1>

					<div className="flex flex-wrap gap-1 mt-4">
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">C++</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">JUCE</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">AudioWorklet</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">DAW</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Processing</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">MaxMSP</p>
					</div>

				</div>
				<br />

				<div className="flex flex-col items-start rounded-xl border-2 border-gray-400 border-opacity-40 p-3">
					<p className="text-5xl">
						<Tool />
					</p>
					<h1 className="text-xl mb-4 flex gap-3 font-semibold">Cloud Platform & Dev Tools</h1>
					<div className="flex flex-wrap gap-1 mt-4">
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">AWS Cloud Architecture</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">AWS Machine Learning</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Linux</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Bash</p>
						<p className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm inline-block mt-2 ">Git</p>
					</div>

				</div>
				<br />
			</div>
		</>
	);
}

export default Technical;
