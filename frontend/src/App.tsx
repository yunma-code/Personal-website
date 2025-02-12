import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/navbar';
import Home from './components/home/home';


function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
    </>
  );
}

export default App;
