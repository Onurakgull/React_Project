import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import "./styles/RegisterForm.css"; // CSS dosyamızı ekliyoruz

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Firestore'da 'users' koleksiyonunu referans alıyoruz
  const usersCollection = collection(db, "users");

  // Form değişikliklerini yönet
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(usersCollection, {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age), // Yaşı sayı olarak kaydediyoruz
        createdAt: new Date(),
      });

      alert("Kayıt başarıyla eklendi!");
      setFormData({ name: "", email: "", age: "" }); // Formu sıfırla
    } catch (error) {
      console.error("Firestore hata:", error);
      setError("Veri eklenirken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Kayıt Formu</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Ad:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Yaş:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Kaydediliyor..." : "Kaydı Tamamla"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegisterForm;
