import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL62POeJqhRYpo4VQIl7MQVA8ifFkFZyU",
  authDomain: "ministries-5791f.firebaseapp.com",
  projectId: "ministries-5791f",
  storageBucket: "ministries-5791f.appspot.com",
  messagingSenderId: "67812806133",
  appId: "1:67812806133:web:317feb9cd4cb3d28e964bc",
  measurementId: "G-FR3Q7KGWPX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;