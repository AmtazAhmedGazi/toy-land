// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMnBcLZT0guz4_qXnqt6USroEwTDx-vG8",
  authDomain: "toy-land-3bfb2.firebaseapp.com",
  projectId: "toy-land-3bfb2",
  storageBucket: "toy-land-3bfb2.firebasestorage.app",
  messagingSenderId: "631813004550",
  appId: "1:631813004550:web:da49d27533a54d90b31287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);