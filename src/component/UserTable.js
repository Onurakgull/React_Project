import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import "./styles/UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const usersCollection = collection(db, "users");

    // 🔴 Firestore'u gerçek zamanlı dinle!
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, []);

  // ❌ Kullanıcıyı sil
  const handleDelete = async (id) => {
    if (window.confirm("Bu kullanıcıyı silmek istediğinizden emin misiniz?")) {
      await deleteDoc(doc(db, "users", id));
    }
  };

  // 📝 Düzenleme moduna geçiş
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({ ...user });
  };

  // 🎯 Hücre içi değişiklikleri yönet
  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // 💾 Güncellenmiş veriyi Firestore'a kaydet
  const handleUpdate = async () => {
    if (editingUser) {
      await updateDoc(doc(db, "users", editingUser), {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
      });

      setEditingUser(null); // Düzenleme modunu kapat
    }
  };

  return (
    <div className="table-container">
      <h2>Kayıtlı Kullanıcılar</h2>
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Email</th>
            <th>Yaş</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange(e, "name")}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleChange(e, "age")}
                    />
                  ) : (
                    user.age
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <button className="save-btn" onClick={handleUpdate}>Kaydet</button>
                  ) : (
                    <button className="edit-btn" onClick={() => handleEdit(user)}>Düzenle</button>
                  )}
                  <button className="del-btn" onClick={() => handleDelete(user.id)}>Sil</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Kayıtlı kullanıcı bulunamadı.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
