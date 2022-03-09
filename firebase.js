import {initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX1Kp83pjKVXXcqb_-zJ0nDqWZmARmmAY",
  authDomain: "instagramtwo-56560.firebaseapp.com",
  projectId: "instagramtwo-56560",
  storageBucket: "instagramtwo-56560.appspot.com",
  messagingSenderId: "299988372729",
  appId: "1:299988372729:web:d333229a57a1325bbee628",
  measurementId: "G-XNTF1STEW4"
}; 

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app, db, storage} ;