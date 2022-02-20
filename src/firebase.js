import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCqInPe_nOENtEyLLqLVFTx3LWV6mW5uQ8",
    authDomain: "whatsapp-clone-e040c.firebaseapp.com",
    projectId: "whatsapp-clone-e040c",
    storageBucket: "whatsapp-clone-e040c.appspot.com",
    messagingSenderId: "976294246913",
    appId: "1:976294246913:web:5f75700d700ea39cb95e00",
    measurementId: "G-1TPRWZC2X6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;