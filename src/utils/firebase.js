// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfX__QIdUlM4Oky0_5S-teKhDYkVIBmOU",
  authDomain: "fire-contact-app-fdced.firebaseapp.com",
  databaseURL: "https://fire-contact-app-fdced-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-fdced",
  storageBucket: "fire-contact-app-fdced.appspot.com",
  messagingSenderId: "636477966399",
  appId: "1:636477966399:web:3072ff2180c65676d2508a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
