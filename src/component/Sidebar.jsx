import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./time.svg";
import "./styles.css";

const navItems = [
  { path: "/", label: "home", icon: "home" },
  { path: "/build", label: "build", icon: "build" },
  { path: "/cloud", label: "cloud", icon: "cloud" },
  { path: "/mail", label: "mail", icon: "mail" },
  { path: "/favorite", label: "favorite", icon: "favorite" }
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const Header = () => (
  <header className="sidebar-header">
    <img src={logo} alt="Logo" />
  </header>
);

export const Sidebar7 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="page sidebar-7-page">
      <button
        type="button"
        className="sidebar-7-burger"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <Icon icon={isSidebarOpen ? "menu_open" : "menu"} />
      </button>
      <aside className={`sidebar-7 ${isSidebarOpen ? "open" : ""}`}>
        <div className="inner">
          <Header />
          <nav>
            {navItems.map(({ path, label, icon }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <Icon icon={icon} />
                <p>{label}</p>
              </NavLink>
            ))}
            <NavLink to="/settings">
              <Icon icon="settings" />
              <p>Settings</p>
            </NavLink>
          </nav>
        </div>
      </aside>
    </section>
  );
};
