// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmfCJYmKqXCaqkGaZ0TM6l-BuapxJjD1w",
  authDomain: "pwa-push-452e2.firebaseapp.com",
  projectId: "pwa-push-452e2",
  storageBucket: "pwa-push-452e2.appspot.com",
  messagingSenderId: "384025187882",
  appId: "1:384025187882:web:e742b51313c1df38eed553",
  measurementId: "G-NBYX64L7EQ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
