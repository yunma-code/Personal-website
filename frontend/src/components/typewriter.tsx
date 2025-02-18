import React, { useEffect, useState, useRef } from "react";

const Typewriter: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello, welcome!";
  const indexRef = useRef(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (indexRef.current >= fullText.length) {
        clearInterval(intervalId);
        return;
      }

      const nextChar = fullText[indexRef.current]; 
      setDisplayedText((prevText) => prevText + nextChar);
      indexRef.current++; 

    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>{displayedText}</h1>
    </div>
  );
};

export default Typewriter;
