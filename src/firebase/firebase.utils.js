import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnpPon30_yZmPYy47SsRgLL3ZysSYGLQQ",
    authDomain: "crwn-db-9ece4.firebaseapp.com",
    databaseURL: "https://crwn-db-9ece4.firebaseio.com",
    projectId: "crwn-db-9ece4",
    storageBucket: "crwn-db-9ece4.appspot.com",
    messagingSenderId: "206779280165",
    appId: "1:206779280165:web:fec733ddaa79fdeafac8cc",
    measurementId: "G-28HC5KJTLH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;