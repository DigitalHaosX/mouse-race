import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDchslzqHCJs0BRVR_Lxid4Tr9qgGARKCM",
  authDomain: "mouse-race-backend.firebaseapp.com",
  databaseURL:
    "https://mouse-race-backend-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mouse-race-backend",
  storageBucket: "mouse-race-backend.appspot.com",
  messagingSenderId: "232153138976",
  appId: "1:232153138976:web:b25078ad5b8a93e2fb3945",
};

initializeApp(firebaseConfig);

const db = getDatabase();

export default db;
