// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBMzcP-GYNHROg uolpwR6WK15DjXxDEFEI",
	authDomain: "walker-ecd9a.firebaseapp.com",
	projectId: "walker-ecd9a",
	storageBucket: "walker-ecd9a.appspot.com",
	messagingSenderId: "35475814414",
	appId: "1:35475814414:web:e6256fc21c20c1181da45f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
