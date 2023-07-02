// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFOzSU_IOs6Uwi37ZtmFpwI9ldwbXZ_wI",
  authDomain: "realtor-clone-practice-70d0a.firebaseapp.com",
  projectId: "realtor-clone-practice-70d0a",
  storageBucket: "realtor-clone-practice-70d0a.appspot.com",
  messagingSenderId: "192250490528",
  appId: "1:192250490528:web:0322dc6050fbb7aba723c5",
  measurementId: "G-8ET1PWF8PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();