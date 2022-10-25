import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjc4m5VfiC2kcmzoFEb6F3ZrAW5DxHWkQ",
  authDomain: "whatsapp-clone-1afaa.firebaseapp.com",
  projectId: "whatsapp-clone-1afaa",
  storageBucket: "whatsapp-clone-1afaa.appspot.com",
  messagingSenderId: "505349604589",
  appId: "1:505349604589:web:9c2bbd81a6f5091dfb78e4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
