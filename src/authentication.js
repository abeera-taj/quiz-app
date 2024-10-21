import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB6Kim-LO2pYn2T8Rtn298vf9p5uJRgsQ",
  authDomain: "quiz-app-e3ed0.firebaseapp.com",
  projectId: "quiz-app-e3ed0",
  storageBucket: "quiz-app-e3ed0.appspot.com",
  messagingSenderId: "439941917764",
  appId: "1:439941917764:web:d35f9b5875def14368a011",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const signupUser = () => {
  createUserWithEmailAndPassword(auth, "user123@gmail.com", "quizapp123").then(
    (value) => console.log(value)
  );
};
