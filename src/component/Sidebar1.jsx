import { NavLink } from "react-router-dom";
import logo from "../component/images/logo.png";
import "./styles.css";

const navItems = [
  { path: "/", label: "home", icon: "home" },
  { path: "/forms", label: "forms", icon: "chat" },
  { path: "/settings", label: "settings", icon: "settings" },
  { path: "/logout", label: "logout", icon: "logout" },
];

const mainNavItems = [
  { path: "/dashboard", label: "Boards", icon: "dashboard" },
  { path: "/teams", label: "Teams", icon: "groups" },
  { path: "/billing", label: "Billing", icon: "credit_card" },
  { path: "/events", label: "Events", icon: "calendar_month" },
  { path: "/tasks", label: "Tasks", icon: "check_box" },
  { path: "/config", label: "Config", icon: "tune" },
];

const statisticsNavItems = [
  { path: "/alerts", label: "Alerts", icon: "warning" },
  { path: "/trends", label: "Trends", icon: "trending_up" },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="left">
        <img src={logo} alt="Profile" />
        {navItems.map(({ path, label, icon }) => (
          <NavLink key={label} to={path} className={({ isActive }) => (isActive ? "active" : "")}>
            <Icon icon={icon} />
          </NavLink>
        ))}
      </div>

      <div className="right">
        <h1>Other Page Links</h1>
        <nav className="buttons">
          {mainNavItems.map(({ path, label, icon }) => (
            <NavLink key={label} to={path} className={({ isActive }) => (isActive ? "active" : "")}>
              <Icon icon={icon} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <h2>Statistics</h2>
        <nav className="buttons">
          {statisticsNavItems.map(({ path, label, icon }) => (
            <NavLink key={label} to={path} className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon icon={icon} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
