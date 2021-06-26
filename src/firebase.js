import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYBzEBFLnlaFHsgfuGu3L9f_oARERBk9E",
    authDomain: "facebook-clone-79555.firebaseapp.com",
    projectId: "facebook-clone-79555",
    storageBucket: "facebook-clone-79555.appspot.com",
    messagingSenderId: "599669500224",
    appId: "1:599669500224:web:50d77b41cd97946ca932a5",
    measurementId: "G-7L194T808V"
  }; 

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;