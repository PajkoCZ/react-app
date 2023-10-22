import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAzioLIQhu-ILnsUvfFpqTqdXlw3pGtXYU",
  authDomain: "react-osu.firebaseapp.com",
  projectId: "react-osu",
  storageBucket: "react-osu.appspot.com",
  messagingSenderId: "728879589308",
  appId: "1:728879589308:web:d735bd1cbef2076b506db9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();