// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiUhiHVyImIi_-oGuyJjqupwkTZSHY2w",
  authDomain: "feedtrack-hackathon.firebaseapp.com",
  projectId: "feedtrack-hackathon",
  storageBucket: "feedtrack-hackathon.firebasestorage.app",
  messagingSenderId: "64067927549",
  appId: "1:64067927549:web:a6d8af85f56dbf07e42d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
