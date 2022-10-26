import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrSSQqVo50haM09cdFmTJkwpXbytPo0-8",
  authDomain: "vue-notepad-71b69.firebaseapp.com",
  projectId: "vue-notepad-71b69",
  storageBucket: "vue-notepad-71b69.appspot.com",
  messagingSenderId: "528301722616",
  appId: "1:528301722616:web:6769c7597da5ced074e40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}