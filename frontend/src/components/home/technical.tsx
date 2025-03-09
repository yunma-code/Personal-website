import "../../tailwind.css";

const Technical = () => {
	return (
		<>
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
				<h3 className="text-3xl font-semibold mb-4">Technical Skills</h3>
				<div>
					<span className="text-base font-semibold">Programming Languages: </span>
					<span className="text-base font-medium text-gray-400">Java, JavaScript, TypeScript, C++, Python, HTML/CSS, SQL</span>
				</div>
				<div>
					<span className="text-base font-semibold">Frameworks & Libraries: </span>
					<span className="text-base font-medium text-gray-400">React, Node.js, Next.js, REST APIs</span>
				</div>
				<div>
					<span className="text-base font-semibold">Database Management: </span>
					<span className="text-base font-medium text-gray-400">MySQL, NoSQL, MongoDB, PostgreSQL</span>
				</div>
				<div>
					<span className="text-base font-semibold">Cloud Platforms: </span>
					<span className="text-base font-medium text-gray-400">AWS Cloud Architecture, AWS Machine Learning</span>
				</div>
				<div>
					<span className="text-base font-semibold">Tools & DevOps: </span>
					<span className="text-base font-medium text-gray-400">Linux, Bash, Git, CMake, Makefile</span>
				</div>
				<div>
					<span className="text-base font-semibold">Machine Learning: </span>
					<span className="text-base font-medium text-gray-400">PyTorch, scikit-learn, Numpy, pandas, Matplotlib</span>
				</div>
				<div>
					<span className="text-base font-semibold">Audio Tools: </span>
					<span className="text-base font-medium text-gray-400">DAW, Processing, MaxMSP</span>
				</div>
			</div>
		</>
	);
}

export default Technical;
