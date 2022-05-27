import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmbGrbbNKxPrAsqYBUuV9k0P2KpJGZkTE",
  authDomain: "assignment11-5c7c1.firebaseapp.com",
  projectId: "assignment11-5c7c1",
  storageBucket: "assignment11-5c7c1.appspot.com",
  messagingSenderId: "662140270795",
  appId: "1:662140270795:web:5f54dc25deb53ff3cd434e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
