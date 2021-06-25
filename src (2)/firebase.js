import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCChhFivWUMMwvBulWhbwE9JIBw4_Zi4IQ",
  authDomain: "final-project-2-41dcb.firebaseapp.com",
  projectId: "final-project-2-41dcb",
  storageBucket: "final-project-2-41dcb.appspot.com",
  messagingSenderId: "339318858599",
  appId: "1:339318858599:web:991593ce0d9ca483f585c2",
  measurementId: "G-527VE64D3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

export default db;