// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXuDuXumnkELVgGKnCyJhJYV2AqYaqS90",
  authDomain: "memories-9e6dd.firebaseapp.com",
  projectId: "memories-9e6dd",
  storageBucket: "memories-9e6dd.appspot.com",
  messagingSenderId: "931397133277",
  appId: "1:931397133277:web:01f52c3089c9e569c70c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();