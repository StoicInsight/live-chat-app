// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAJd3VALPjUXgc3MrCp8hbgcTFhbUUQcPM",
  authDomain: "chat-app-20e55.firebaseapp.com",
  projectId: "chat-app-20e55",
  storageBucket: "chat-app-20e55.appspot.com",
  messagingSenderId: "96061521144",
  appId: "1:96061521144:web:88bd43bf4853930a084f0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
