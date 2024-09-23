// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyDvyBPQGygJ9InmAjMInGuDwsL_M5wcHeo",
  authDomain: "react-app-1bb74.firebaseapp.com",
  databaseURL: "https://react-app-1bb74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-app-1bb74",
  storageBucket: "react-app-1bb74.appspot.com",
  messagingSenderId: "612120626317",
  appId: "1:612120626317:web:a37c01951374c7040e4ec4",
  measurementId: "G-6644Z42TTX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;