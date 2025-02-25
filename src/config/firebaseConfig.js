import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  projectId: "reactformproject-9f017",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID",
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Authentication servislerini başlat
export const db = getFirestore(app);
export const auth = getAuth(app);

// Kullanıcı koleksiyonunu tanımla ve export et ✅
export const usersCollection = collection(db, "users");
