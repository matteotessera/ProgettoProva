// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzs_MWkcLrR5IhtjkilKVjnubmtU0VptQ",
  authDomain: "testappfirebase-6634c.firebaseapp.com",
  projectId: "testappfirebase-6634c",
  storageBucket: "testappfirebase-6634c.firebasestorage.app",
  messagingSenderId: "797005238879",
  appId: "1:797005238879:web:2a47353a9807da48cb81ea",
  measurementId: "G-QVFYML30MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
