// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPcRbkhTuE9rNVtRAqtZ3_ywPQNlv8umc",
  authDomain: "vite-contact-c02f3.firebaseapp.com",
  projectId: "vite-contact-c02f3",
  storageBucket: "vite-contact-c02f3.firebasestorage.app",
  messagingSenderId: "511520135556",
  appId: "1:511520135556:web:6b8963fa53c90430d265d1",
  measurementId: "G-GY8R04SYKF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);