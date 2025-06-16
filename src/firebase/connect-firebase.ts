import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeYAYFU1sCYVE3tlETb6mXQPzuAUDjC3E",
  authDomain: "mostracientifica2c.firebaseapp.com",
  projectId: "mostracientifica2c",
  storageBucket: "mostracientifica2c.firebasestorage.app",
  messagingSenderId: "64032943083",
  appId: "1:64032943083:web:d6f2bf94f67b8caf1547ae",
  measurementId: "G-ST1222EW7Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }