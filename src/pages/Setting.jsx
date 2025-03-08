import React, { useState, useContext } from "react";
import "./Css/setting.css";
import { ThemeContext } from "./accordion/SettingMode/ThemeContext";
import { motion } from "framer-motion";

const Settings = () => {
  const [language, setLanguage] = useState("tr");
  const [notifications, setNotifications] = useState(true);
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState("");

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleSave = () => {
    alert("Ayarlar kaydedildi!");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Hesabınızı silmek istediğinizden emin misiniz?")) {
      alert("Hesap silindi!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.8, rotate: 5 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0, // Dönme hareketinin sonlanacağı noktayı sıfırladık
        transition: {
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        },
      }}
      exit={{ opacity: 0, y: 20 }}
      className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg"
    >
      <div className="settings-container">
        <h2>⚙️ Ayarlar</h2>

        {/* Profil Fotoğrafı */}
        <div className="profile-section">
          <label className="profile-label">Profil Fotoğrafı</label>
          <div className="profile-upload">
            {profilePic ? (
              <img src={profilePic} alt="Profil" className="profile-pic" />
            ) : (
              <div className="placeholder-pic">📷</div>
            )}
            <input type="file" onChange={handleProfilePicChange} />
          </div>
        </div>

        {/* Koyu Mod */}
        <div className="settings-group">
          <div className="settings-label">
            <span className="icon">🌙</span>
            <label>Koyu Mod</label>
          </div>
          <label className="switch">
            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
            <input type="checkbox" className="input"  checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider"></span>
          </label>
        </div>

        {/* Dil Seçimi */}
        <div className="settings-group">
          <div className="settings-label">
            <span className="icon">🌍</span>
            <label>Uygulama Dili</label>
          </div>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Bildirimler */}
        <div className="settings-group">
          <div className="settings-label">
            <span className="icon">🔔</span>
            <label>Bildirimleri Aç</label>
          </div>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
        </div>

        {/* Şifre Değiştirme */}
        <div className="settings-group">
          <div className="settings-label">
            <span className="icon">🔑</span>
            <label>Yeni Şifre</label>
          </div>
          <input type="password" placeholder="Yeni şifrenizi girin" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="save-btn" onClick={handleSave}>Kaydet</button>
        <button className="delete-btn" onClick={handleDeleteAccount}>Hesabı Sil</button>
      </div>
    </motion.div>
  );
};

export default Settings;
