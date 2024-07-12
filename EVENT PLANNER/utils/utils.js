import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa-W298u62LiPhanNZ134EjcEVYhoVR6c",
  authDomain: "my-first-project-ca126.firebaseapp.com",
  projectId: "my-first-project-ca126",
  storageBucket: "my-first-project-ca126.appspot.com",
  messagingSenderId: "974365332473",
  appId: "1:974365332473:web:5b7055804d38470389e328",
  measurementId: "G-9GLVE3LG1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const storage= getStorage(app);

export { auth,db,storage,onAuthStateChanged};
