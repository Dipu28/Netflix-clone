import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK3vOiv3q1GSHpUCCWLTApS6U2EnWa7JE",
  authDomain: "netflix-clone-60229.firebaseapp.com",
  projectId: "netflix-clone-60229",
  storageBucket: "netflix-clone-60229.appspot.com",
  messagingSenderId: "21967472335",
  appId: "1:21967472335:web:775b553a2986389f4819ba",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
