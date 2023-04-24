import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF1erw8B2uYVQdUsyRx1LlJwrdqMxoL4Y",
  authDomain: "travel-tour-61ce7.firebaseapp.com",
  projectId: "travel-tour-61ce7",
  storageBucket: "travel-tour-61ce7.appspot.com",
  messagingSenderId: "679174673465",
  appId: "1:679174673465:web:88008faa8b9b0f55dfa9e8",
  measurementId: "G-PVJ3X919RQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };