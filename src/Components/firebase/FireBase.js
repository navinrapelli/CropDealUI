import firebase from "firebase"

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBkSkJ2owo15as3tDpBuDl-QBvswwfAdDs",
    authDomain: "clone-48a0a.firebaseapp.com",
    projectId: "clone-48a0a",
    storageBucket: "clone-48a0a.appspot.com",
    messagingSenderId: "1091149113516",
    appId: "1:1091149113516:web:87493ffba93957f779d709",
    measurementId: "G-6R7QKVDG9T"
  



});

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();


export{db,auth};