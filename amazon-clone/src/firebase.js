import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyA9ZjRTT_N76P-OeZkShgsilUBKNw2frHo",
  authDomain: "clone-c52a5.firebaseapp.com",
  databaseURL: "https://clone-c52a5.firebaseio.com",
  projectId: "clone-c52a5",
  storageBucket: "clone-c52a5.appspot.com",
  messagingSenderId: "1096535697221",
  appId: "1:1096535697221:web:2c08d4a652a07a978fc02c",
  measurementId: "G-PDQNTLFJ6N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };