import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./component/Sidebar1";
import "./App.css";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Forms from "./pages/Forms";
import Mail from "./pages/Mail";
import Favorite from "./pages/Favorite";
import Setting from "./pages/Setting";
import Sipederman from "./pages/Sipederman"
import { ThemeProvider } from "./pages/accordion/SettingMode/ThemeContext";
import { Table1Example } from "./pages/tables/Table1Example";
import Footer from "./pages/Footer"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
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
              <Route path="/settings" element={<Setting />} />
              <Route path="/dashboard" element={<Sipederman />} />
              <Route path="/table" element={<Table1Example />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </ThemeProvider>

  );
}

export default App;
