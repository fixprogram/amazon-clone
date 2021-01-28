import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZBdmYeTmsYj6juXXLb3dfu_OODc6LxxQ",
  authDomain: "clone-5827f.firebaseapp.com",
  projectId: "clone-5827f",
  storageBucket: "clone-5827f.appspot.com",
  messagingSenderId: "7259078706",
  appId: "1:7259078706:web:9d3a61f20597a2d7b43c2b",
  measurementId: "G-JNNFW55NF1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
