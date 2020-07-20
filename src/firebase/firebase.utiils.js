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

export const convertCollectionsSnapshotToMap=collections=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {items,title}=doc.data();
    return {
      id:doc.id,
      routeName:encodeURI(title.toLowerCase()),
      items,
      title,
    

      
    }
  });
 return transformedCollection.reduce((accumulator,collection)=>{
   accumulator[collection.title.toLowerCase()]=collection;
   return accumulator;
  },{})

}

  export const  auth =firebase.auth();
  export const firestore=firebase.firestore();

export  const  createUserProfile= async (userAuth,additionalData)=>{

  if(!userAuth) return;

const userRef= firestore.doc(`users/${userAuth.uid}`)

const userSnap=  userRef.get();
if(!userSnap.exists){
const {displayName, email}=userAuth;
const createdAt=new Date();
try {
 await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData,
  })
 
} catch (error) {
  console.log("The error is", error.message)
}
}
return userRef;

}
export const addCollectionAndDocument=async (collectionKey,objectsToAdd)=>{
const collectionRef=firestore.collection(collectionKey);
const batch=firestore.batch();
objectsToAdd.forEach(obj=>{

  const newDocRef=collectionRef.doc();
  batch.set(newDocRef,obj);
});
return await batch.commit();
};

 const providor =new firebase.auth.GoogleAuthProvider();
providor.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle=()=>auth.signInWithPopup(providor);





export default firebase; 