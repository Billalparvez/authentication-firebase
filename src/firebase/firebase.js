// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeYV7fWly40i9WQ1crjM70ItWSzy-dE9E",
  authDomain: "gusebook-dfe52.firebaseapp.com",
  projectId: "gusebook-dfe52",
  storageBucket: "gusebook-dfe52.appspot.com",
  messagingSenderId: "526477766799",
  appId: "1:526477766799:web:b166b197f037dd7d40c0fa",
};

// Initialize Firebase
const googleAuthProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registerWithEmailAndPass = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const loginWithEmailAndPass = async (email, password) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    return userLogin;
  } catch (err) {
    console.log(err);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};
const signWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    // console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
export {
  auth,
  loginWithEmailAndPass,
  registerWithEmailAndPass,
  sendPasswordReset,
  signWithGoogle,
};
