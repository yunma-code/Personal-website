import "../../tailwind.css";

const Education = () => {
	return (
		<>
			<h1 className="text-3xl font-bold mb-4 text-white">Education & Experience</h1>
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
				<div className="flex gap-5 items-start">
					<p className="text-gray-400 text-sm ">2023 — 2026
					</p>
					<div className="flex flex-col">
						<h2 className="text-xl font-semibold ">
							Northeastern University
						</h2>
						<p className="text-gray-400 mt-2 text-sm">
							Master of Science in Computer Science
						</p>
					</div>
				</div>
			</div>
			<br />
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
				<div className="flex gap-5 items-start">
					<p className="text-gray-400 text-sm ">2021 — 2023
					</p>
					<div className="flex flex-col">
						<h2 className="text-xl font-semibold">
							University of Michigan - Ann Arbor
						</h2>
						<p className="text-gray-400 mt-2 text-sm">
							Master of Music in Composition
						</p>
					</div>
				</div>
			</div>
			<br />
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
				<div className="flex gap-5 items-start">
					<p className="text-gray-400 text-sm px-4">2021
					</p>
					<div className="flex flex-col">
						<h2 className="text-xl font-semibold  ">
							ByteDance
						</h2>
						<p className="text-gray-400 mt-2 text-sm">
							Music Intelligence Test Intern
						</p>
						<div>
							<p className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">
								Unit Testing
							</p> <></>
							<p className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">
								Java
							</p> <></>
							<p className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm inline-block mt-2 w-fit">
								Test Automation
							</p>
						</div>
					</div>
				</div>
			</div>
		</>


	);
};

export default Education;
