// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXOKwTkVeHmiE8KvHMzdTlIvIBCetRe6Q",
  authDomain: "logintiendascg.firebaseapp.com",
  projectId: "logintiendascg",
  storageBucket: "logintiendascg.appspot.com",
  messagingSenderId: "2590929571",
  appId: "1:2590929571:web:fa20ee261c45cad3a5c516",
  measurementId: "G-7LYQ7RZN3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);