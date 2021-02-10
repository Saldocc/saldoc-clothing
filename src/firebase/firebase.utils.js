import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyDkA8RUnZbDsLBy_eMNzHsPoVPslobXEWk",
  authDomain: "clothes-db-c4cb3.firebaseapp.com",
  projectId: "clothes-db-c4cb3",
  storageBucket: "clothes-db-c4cb3.appspot.com",
  messagingSenderId: "147774874467",
  appId: "1:147774874467:web:24088f8009c69445a92956",
  measurementId: "G-EJJDH9M82N"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;