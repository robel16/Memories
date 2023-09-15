// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM95oQAZSkOHq0IK8-ZI4JYEoJrNTpBMI",
  authDomain: "ecememories.firebaseapp.com",
  projectId: "ecememories",
  storageBucket: "ecememories.appspot.com",
  messagingSenderId: "866451344149",
  appId: "1:866451344149:web:4844235dc30ef16bd3f71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();