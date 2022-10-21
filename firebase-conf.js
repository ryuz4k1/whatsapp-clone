import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAjc4m5VfiC2kcmzoFEb6F3ZrAW5DxHWkQ",
  authDomain: "whatsapp-clone-1afaa.firebaseapp.com",
  projectId: "whatsapp-clone-1afaa",
  storageBucket: "whatsapp-clone-1afaa.appspot.com",
  messagingSenderId: "505349604589",
  appId: "1:505349604589:web:9c2bbd81a6f5091dfb78e4",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { app, db, auth, provider };