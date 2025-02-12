import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Typewriter from "./typewriter";

const Home: React.FC =() => {
	const [showContent, setShowContent] = useState<boolean>(false);

	return(
		<div className="home-container">
			<div className="typewriter-container">
				<Typewriter />
			</div>
			<motion.div	
				className="home-bubble-image"
				layout
				initial={{ scale: 1}}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setShowContent(!showContent)}
				style={{
					backgroundImage: `url("/images/homeimg.jpg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
			</motion.div>

			{showContent && (
				<motion.div
					className="content-box"
					initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showContent ? 1: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
				>
					<h1>
						short self intro text here
					</h1>
				</motion.div>
			)}
		</div>
	);
};

export default Home;