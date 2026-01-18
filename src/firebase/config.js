import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCsZ4JUPHxoUslmrNjdGIKmhi_F_34Jnwk",
  authDomain: "blog-69f58.firebaseapp.com",
  projectId: "blog-69f58",
  storageBucket: "blog-69f58.firebasestorage.app",
  messagingSenderId: "975089614545",
  appId: "1:975089614545:web:1c02c6c0ba50ca0037cff0"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db= getFirestore (app);

