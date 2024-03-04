// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyADDwpD5VXt0Run4U085Ow6W_aHWHL-Cek",
  authDomain: "portfolio-zakingapp.firebaseapp.com",
  projectId: "portfolio-zakingapp",
  storageBucket: "portfolio-zakingapp.appspot.com",
  messagingSenderId: "266886532395",
  appId: "1:266886532395:web:774b131f2cb5c42035896e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
