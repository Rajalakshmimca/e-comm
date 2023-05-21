// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6tVe4maLPHol1XSJbvmfetlp_CQY_-vo",
    authDomain: "e-commerce-b9f40.firebaseapp.com",
    projectId: "e-commerce-b9f40",
    storageBucket: "e-commerce-b9f40.appspot.com",
    messagingSenderId: "971497295058",
    appId: "1:971497295058:web:68aa0fd6c058a7c500710b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
