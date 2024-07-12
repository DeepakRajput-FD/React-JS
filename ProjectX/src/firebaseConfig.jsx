
// npm install firebase

// npm install -g firebase-tools

// for login firebase login

// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNnsWabnADGkCGbjr2FdukkA17xXsGzXI",
  authDomain: "myproject1-d3c44.firebaseapp.com",
  projectId: "myproject1-d3c44",
  storageBucket: "myproject1-d3c44.appspot.com",
  messagingSenderId: "168304370242",
  appId: "1:168304370242:web:97156152d6f34997f443db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage =getStorage(app)

export {auth,db,storage};