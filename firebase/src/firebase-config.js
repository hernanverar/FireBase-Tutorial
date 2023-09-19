
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyClKIzB6pfzU_PbKQMj3y1D48qAjVjLZCE",
  authDomain: "fir-tutorial-45610.firebaseapp.com",
  projectId: "fir-tutorial-45610",
  storageBucket: "fir-tutorial-45610.appspot.com",
  messagingSenderId: "381564291931",
  appId: "1:381564291931:web:27fd0b1588798334dbe87e",
  measurementId: "G-9GL0XBCC5R"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);