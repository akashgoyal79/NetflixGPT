// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQLfKavKk0HejTP3Q5YiHWgzQMA0d-14",
  authDomain: "netflixgpt-669a0.firebaseapp.com",
  projectId: "netflixgpt-669a0",
  storageBucket: "netflixgpt-669a0.appspot.com",
  messagingSenderId: "1015173071958",
  appId: "1:1015173071958:web:c1c739cb1be941757127f7",
  measurementId: "G-40CYB5SLET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();