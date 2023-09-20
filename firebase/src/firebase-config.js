
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAtN3iZLEkUzxAwaonvCKbEH9irX700ENM",
  authDomain: "fir-tuto-69612.firebaseapp.com",
  projectId: "fir-tuto-69612",
  storageBucket: "fir-tuto-69612.appspot.com",
  messagingSenderId: "53987764452",
  appId: "1:53987764452:web:7c96f640325a932be1a4f1",
  measurementId: "G-FV1K1GCTQ5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);