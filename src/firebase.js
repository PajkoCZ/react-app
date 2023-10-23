import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

export { db };