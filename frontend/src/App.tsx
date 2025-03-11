import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import { useState, useEffect } from "react";


function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: { clientX: any; clientY: any; }) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursor);
    return() => document.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <>
    <div className="cursor" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} />
      <div className="app-container">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
