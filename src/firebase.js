import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDezJtgcVT2pgpNmYHHVC6tQEWez-msizY",
  authDomain: "instagram-clone-react-62d6e.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-62d6e.firebaseio.com",
  projectId: "instagram-clone-react-62d6e",
  storageBucket: "instagram-clone-react-62d6e.appspot.com",
  messagingSenderId: "574799366190",
  appId: "1:574799366190:web:e23da0e4f8aaca8efaf7bf",
  measurementId: "G-FB9C6NBCVP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
