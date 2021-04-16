import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwphRMB2_QSO6Aig6ccYzGFDkTBNtlUYs",
    authDomain: "shopsector-cfc13.firebaseapp.com",
    projectId: "shopsector-cfc13",
    storageBucket: "shopsector-cfc13.appspot.com",
    messagingSenderId: "789492558424",
    appId: "1:789492558424:web:db0622184d08f7d611f82d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();

  export { projectFireStore,projectStorage};