import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAV3LCW3x2s2BSgm_bLuHwDz63UpfoXJXo",
    authDomain: "netflix-clone-a621e.firebaseapp.com",
    databaseURL: "https://netflix-clone-a621e.firebaseio.com",
    projectId: "netflix-clone-a621e",
    storageBucket: "netflix-clone-a621e.appspot.com",
    messagingSenderId: "458221850123",
    appId: "1:458221850123:web:e9d06894a83d0f8551810e",
    measurementId: "G-WM2V6JVTDZ"
};

const firebase = Firebase.initializeApp(firebaseConfig);




export { firebase };








