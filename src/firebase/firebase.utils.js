import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpOwDy8AngbOxS7pFCx3JJz__BHxilJAY",
  authDomain: "crown-db-d3c6c.firebaseapp.com",
  databaseURL: "https://crown-db-d3c6c.firebaseio.com",
  projectId: "crown-db-d3c6c",
  storageBucket: "crown-db-d3c6c.appspot.com",
  messagingSenderId: "479588990625",
  appId: "1:479588990625:web:4f9b7cbf434fabd099fae0",
  measurementId: "G-CP5DWTG9BR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;