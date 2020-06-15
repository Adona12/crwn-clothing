import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
var config ={
    apiKey: "AIzaSyChd0amxLIqAP0pLPPq_bAZ9Ev6Xlu7e9k",
    authDomain: "crwn-clothing-9d0a0.firebaseapp.com",
    databaseURL: "https://crwn-clothing-9d0a0.firebaseio.com",
    projectId: "crwn-clothing-9d0a0",
    storageBucket: "crwn-clothing-9d0a0.appspot.com",
    messagingSenderId: "806131547576",
    appId: "1:806131547576:web:6488405c3da51a5001e34d",
    measurementId: "G-T1P9Q8997W"
  };
  firebase.initializeApp(config)

export const  auth =firebase.auth();
export const firestore=firebase.firestore();
 const providor =new firebase.auth.GoogleAuthProvider();
providor.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle=()=>auth.signInWithPopup(providor);
export default firebase; 