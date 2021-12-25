import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDM1sgJfXVcHGezSYqVSRScHcIuCi9jcxs",
    authDomain: "docs-clone-997fb.firebaseapp.com",
    projectId: "docs-clone-997fb",
    storageBucket: "docs-clone-997fb.appspot.com",
    messagingSenderId: "845013804643",
    appId: "1:845013804643:web:78b26ad743ab2fc9b1ba56"
 };

 const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 const db=app.firestore()

 export {db};