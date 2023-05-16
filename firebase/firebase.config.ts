// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmu4Jz-V1mXXodrVJ7pMxs19U0FmfcFZw",
  authDomain: "eccomerce-874e7.firebaseapp.com",
  projectId: "eccomerce-874e7",
  storageBucket: "eccomerce-874e7.appspot.com",
  messagingSenderId: "495863989442",
  appId: "1:495863989442:web:70b4da707cfa1ab97a675b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export default auth;