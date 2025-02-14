import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';


function App() {
  return (
    <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
    </div>
  );
}

export default App;
