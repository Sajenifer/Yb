import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.jsx';
import Homepage from './home.jsx';
import Update from './Update.jsx';
import AboutMe from './about-me.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/update" element={<Update />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
