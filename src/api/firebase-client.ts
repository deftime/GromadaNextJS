import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALSs6KxvOXsJG3Ed6RXhyBpTTDk4q_0WQ",
  authDomain: "gromada-zakon.firebaseapp.com",
  databaseURL: "https://gromada-zakon-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gromada-zakon",
  storageBucket: "gromada-zakon.firebasestorage.app",
  messagingSenderId: "902433193782",
  appId: "1:902433193782:web:b3bb68595befc2bf72bd97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Provide API tools
export const auth = getAuth(app);
export const db = getDatabase(app);