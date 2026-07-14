// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmkCBkj8NLEaAuRyYjY_OXycrTUEqfAg",
  authDomain: "orbric-threads.firebaseapp.com",
  projectId: "orbric-threads",
  storageBucket: "orbric-threads.firebasestorage.app",
  messagingSenderId: "1048145506672",
  appId: "1:1048145506672:web:13ffc87f1b77308f559fb5",
  measurementId: "G-MMKRJK29TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);