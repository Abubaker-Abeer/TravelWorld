// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzTL-I8H7NhYEizNHE3m8UCkWAbWhLr8",
  authDomain: "travelworld-auth.firebaseapp.com",
  projectId: "travelworld-auth",
  storageBucket: "travelworld-auth.appspot.com",
  messagingSenderId: "482923742989",
  appId: "1:482923742989:web:f607722581239f36dc1244",
  measurementId: "G-CKPYXM5KPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // 

export { auth }; // 
