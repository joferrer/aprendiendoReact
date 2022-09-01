// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEo55w1MmH2AEZpVght5wJWIR430OmukA",
  authDomain: "reactjournal-ff26b.firebaseapp.com",
  projectId: "reactjournal-ff26b",
  storageBucket: "reactjournal-ff26b.appspot.com",
  messagingSenderId: "94629864668",
  appId: "1:94629864668:web:dca5a2f49e4adf08fdc019"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FiseBaseDB = getFirestore(FireBaseApp);
