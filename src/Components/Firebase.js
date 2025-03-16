// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4zZkFSJTUhRQ2evnOPB0O_dWNb73w_yI",
  authDomain: "netflixclone-d0183.firebaseapp.com",
  projectId: "netflixclone-d0183",
  storageBucket: "netflixclone-d0183.firebasestorage.app",
  messagingSenderId: "1078616622581",
  appId: "1:1078616622581:web:1d924fcf2fccf893b54cbc",
  measurementId: "G-ZFPLD4HC3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);