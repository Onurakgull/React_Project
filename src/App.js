import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./component/Sidebar1";
import "./App.css";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Forms from "./pages/Forms";
import Mail from "./pages/Mail";
import Favorite from "./pages/Favorite";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar setIsOpen={setIsSidebarOpen} />
        </div>
        <div className={`content ${isSidebarOpen ? 'open' : 'closed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<Build />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
