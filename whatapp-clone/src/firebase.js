import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACp1LrQXcsC0cpT7KO3CGY-o3MiFHv3dE",
  authDomain: "whatsapp-clone-4298a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-4298a.firebaseio.com",
  projectId: "whatsapp-clone-4298a",
  storageBucket: "whatsapp-clone-4298a.appspot.com",
  messagingSenderId: "955924318308",
  appId: "1:955924318308:web:f34889b7b742edc357f771",
  measurementId: "G-9BC7LTY30Y"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;