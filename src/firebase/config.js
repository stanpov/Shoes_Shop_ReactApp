import firebase from 'firebase';


// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwphRMB2_QSO6Aig6ccYzGFDkTBNtlUYs",
    authDomain: "shopsector-cfc13.firebaseapp.com",
    projectId: "shopsector-cfc13",
    storageBucket: "shopsector-cfc13.appspot.com",
    messagingSenderId: "789492558424",
    appId: "1:789492558424:web:db0622184d08f7d611f82d"
  });
 

  const db = firebaseApp.storage();
  const storage = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { storage,db,auth};