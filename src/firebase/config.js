
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA-C1KStCmHY4tA_CVebP_5etu1mPklBLM",
  authDomain: "netflix-clone-67033.firebaseapp.com",
  projectId: "netflix-clone-67033",
  storageBucket: "netflix-clone-67033.appspot.com",
  messagingSenderId: "276086620629",
  appId: "1:276086620629:web:c4c6aa293360492917fd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

 