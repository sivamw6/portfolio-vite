// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpp704sTiu0mV-BJukGt2b3hCYZ2h0kB0",
  authDomain: "mavis-portfolio.firebaseapp.com",
  projectId: "mavis-portfolio",
  storageBucket: "mavis-portfolio.appspot.com",
  messagingSenderId: "497665807650",
  appId: "1:497665807650:web:6721a58768c7e1bd5f417b",
  measurementId: "G-1DV16MMRDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
