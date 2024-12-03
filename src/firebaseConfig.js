// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgxVRLcAUhfkgbMR-_sj9Do4zzR_l1MgA",
  authDomain: "react-firebase-373eb.firebaseapp.com",
  databaseURL: "https://react-firebase-373eb-default-rtdb.firebaseio.com",
  projectId: "react-firebase-373eb",
  storageBucket: "react-firebase-373eb.firebasestorage.app",
  messagingSenderId: "459904858437",
  appId: "1:459904858437:web:8d6f340cf7e55a765e662c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;