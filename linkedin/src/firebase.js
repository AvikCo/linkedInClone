import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJiq6nkWQ1XASp2HFp-hUhkDC3YMRG9QA",
    authDomain: "linkedin-clone-b3bfb.firebaseapp.com",
    projectId: "linkedin-clone-b3bfb",
    storageBucket: "linkedin-clone-b3bfb.appspot.com",
    messagingSenderId: "786864340960",
    appId: "1:786864340960:web:125da7b04afe618f557585"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
