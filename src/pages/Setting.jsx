import React, { useState, useContext } from "react";
import "./Css/setting.css";
import { ThemeContext } from "./accordion/SettingMode/ThemeContext";

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
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
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
  );
};

export default Settings;
