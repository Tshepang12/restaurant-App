// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWErExaqKbwrzr2tARcCGGhDrgWRgpRY",
  authDomain: "react-firebase-auth-6c968.firebaseapp.com",
  projectId: "react-firebase-auth-6c968",
  storageBucket: "react-firebase-auth-6c968.appspot.com",
  messagingSenderId: "414701991175",
  appId: "1:414701991175:web:a27cae8d2939a6e63281a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

export {auth,db};