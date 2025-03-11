import "../../tailwind.css";

const Project = () => {
	return (
		<>
		<h1 className="text-3xl font-bold mb-4 text-white">Personal Projects </h1>
		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">Canvas Web Application</h1>
				{/* display image */}
				<img src="/images/canvas.png" alt="Canvas" style={{ width: "750px", height: "380px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">Developed a canvas-based web application featuring modular content management, interactive quizzes, and user management functions with a scalable database architecture. 
				<br/><br/>
				Built using React, TypeScript, HTML/CSS, and Redux for a dynamic front-end experience, while leveraging MongoDB for efficient data storage and retrieval. 
				</h2>
				<h2 className="text-base mb-4 text-white">Github Repo Link: <a href="https://github.com/yunma-code/canvas-react-webapp-project" className="text-blue-500">Canvas Web App</a></h2>
			</div>
		</div>

		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">LullAi - Personalized Audiobooks for Kids</h1>
				{/* display image */}
				<img src="/images/lullai.png" alt="LullAi" style={{ width: "660px", height: "450px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">Participant of ElevenLabs x 16z Worldwide Hackathon</h2>
				<br/>
				<h2 className="text-base mb-4 text-white">Developed a storytelling web app for busy parents to stay connected with their children by creating personalized audiobooks. Users can input their story text and generate narrated audio using voice cloning and text-to-speech powered by the Eleven Labs API. 
				<br/><br/>
				Built for the Eleven Labs Hackathon, the app features a user-friendly interface designed for both parents and kids, leveraging Next.js, Tailwind CSS, and Express for a seamless experience.
				</h2>
				<h2 className="text-base mb-4 text-white">Github Repo Link: <a href="https://github.com/yunma-code/LullAi" className="text-blue-500">LullAi AudioBook</a></h2>
			</div>
		</div>

		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">Aquarium Database Management System</h1>
				{/* display image */}
				<img src="/images/dbms.png" alt="DBMS" style={{ width: "660px", height: "450px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">Developed This Java-based GUI application interacts with an SQL database, enabling users to manage the Aquarium Management System through CRUD operations. 
				It handles entities like animals, staff, tanks, care tasks, schedules, and aquarium events.
				</h2>
				<h2 className="text-base mb-4 text-white">Github Repo Link: <a href="https://github.com/yunma-code/Database-management-system-application" className="text-blue-500">Aquarium DBMS</a></h2>
			</div>
		</div>

		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">Task Management System</h1>
				<img src="/images/todo.png" alt="Todo" style={{ width: "470px", height: "450px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">
				Built a full-stack task management system with Spring Boot, MySQL, and Angular, deploying it on AWS for scalability.
			  It features secure authentication, REST APIs, and a user-friendly interface.
				</h2>
			</div>
		</div>

		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">Canon Generator</h1>
				{/* display image */}
				<img src="/images/Canon.png" alt="Canon" style={{ width: "700px", height: "400px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">Developed a self-generating canon combines Processing for visual presentation and MaxMSP for audio. Click the play button on the Processing canvas to start the playback, and move the mouse to transpose the melodic line in real time.</h2>
				<h2 className="text-base mb-4 text-white">Github Repo Link: <a href="https://github.com/yunma-code/canon-generator" className="text-blue-500">Canon Generator</a></h2>
			</div>
		</div>

		<div className="max-w-3xl ml-0 mr-auto p-6 bg-gray-900 bg-opacity-0 hover:bg-opacity-100 transition duration-300 text-white rounded-lg">
			<div className="flex flex-col items-start rounded-lg">
				<h1 className="text-2xl font-bold mb-4 text-white">Processing Snake Game</h1>
				{/* display image */}
				<img src="/images/snake.png" alt="Snake" style={{ width: "450px", height: "350px"}} />
				<br/> 
				<h2 className="text-base mb-4 text-white">Develop a classic Snake game in Processing using Java, implementing game logic for movement, border collisions, and scoring.</h2>
			</div>
		</div>
		</>
	);
}

export default Project;