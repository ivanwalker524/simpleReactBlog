import { getAuth, GoogleAuthProvider } from "firebase/auth"
import  {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM3ROWOJ1I-JrPM_a3g44aRBvVXhmVTAA",
  authDomain: "walker-31f0c.firebaseapp.com",
  projectId: "walker-31f0c",
  storageBucket: "walker-31f0c.appspot.com",
  messagingSenderId: "395280128475",
  appId: "1:395280128475:web:0e7e9492e65a778c0feffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
