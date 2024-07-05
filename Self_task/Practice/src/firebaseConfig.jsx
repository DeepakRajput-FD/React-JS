// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1OChDC-LBSSwpnZn7KzhGYx3EK-uBkMU",
  authDomain: "myproject2-ed9dd.firebaseapp.com",
  projectId: "myproject2-ed9dd",
  storageBucket: "myproject2-ed9dd.appspot.com",
  messagingSenderId: "76859503959",
  appId: "1:76859503959:web:1c22b4dab60467c4e6fa12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage=getStorage(app)
export {auth,firestore,storage}