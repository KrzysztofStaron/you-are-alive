// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuGMS54UowrEzIaBEfLrunb_Q4G4Y6LtY",
  authDomain: "lo-strzelin.firebaseapp.com",
  projectId: "lo-strzelin",
  storageBucket: "lo-strzelin.firebasestorage.app",
  messagingSenderId: "730599882747",
  appId: "1:730599882747:web:e0d11772b8900d7548955e",
  measurementId: "G-CJVCWSJ8B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
