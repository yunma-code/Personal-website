import "../../tailwind.css";

const Education = () => {
	return (
		<>
			<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
				<div className="flex gap-5 place-items-start">
					<p className="text-gray-400 text-sm">2023 — PRESENT
					</p>
					<div>
						<h2 className="text-xl font-semibold flex place-items-start">
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
				<div className="flex gap-5 place-items-start">
					<p className="text-gray-400 text-sm">2021 — 2023
					</p>
					<div>
						<h2 className="text-xl gap-5 font-semibold flex place-items-start">
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
				<div className="flex gap-5 place-items-start">
					<p className="text-gray-400 text-sm">2021 Apr-Aug
					</p>
					<div>
						<h2 className="text-xl gap-5 font-semibold flex items-start ">
							ByteDance
						</h2>
						<p className="text-gray-400 mt-2 text-sm">
							Music Intelligence Test Intern
						</p>

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
		</>


	);
};

export default Education;
