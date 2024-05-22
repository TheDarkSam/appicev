// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5Gec_zfVh1ZpREkMvbRa_Y59idwbGOY",
  authDomain: "jose-candido-ed267.firebaseapp.com",
  projectId: "jose-candido-ed267",
  storageBucket: "jose-candido-ed267.appspot.com",
  messagingSenderId: "357526177099",
  appId: "1:357526177099:web:fcfcf060e6c4b1fc8154ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);