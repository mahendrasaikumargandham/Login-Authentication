import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDkcvUG1qcz5m7UdnRBUo-yNnyiys86RE",
  authDomain: "login-cb402.firebaseapp.com",
  projectId: "login-cb402",
  storageBucket: "login-cb402.appspot.com",
  messagingSenderId: "1076607478058",
  appId: "1:1076607478058:web:4f35a5e6b67c22739ad653",
  measurementId: "G-LHDNH0SB94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);


export { authentication };