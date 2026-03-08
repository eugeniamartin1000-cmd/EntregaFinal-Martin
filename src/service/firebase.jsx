// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2DatIVpgeg_ff35N6zrabFaSyJFcqjs8",
  authDomain: "entrega-final-martin.firebaseapp.com",
  projectId: "entrega-final-martin",
  storageBucket: "entrega-final-martin.firebasestorage.app",
  messagingSenderId: "1033401443780",
  appId: "1:1033401443780:web:945ba4ecc706c2bce9b091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)