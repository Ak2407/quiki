import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quiki-1f9af.firebaseapp.com",
  projectId: "quiki-1f9af",
  storageBucket: "quiki-1f9af.firebasestorage.app",
  messagingSenderId: "752805516130",
  appId: "1:752805516130:web:4a9012f450e14eb18bd23b",
  measurementId: "G-MNB6L9PMSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
