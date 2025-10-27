import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4csdOuaEN6k8B8pus0rvzxGpPJzjCc3c",
  authDomain: "workspacefinder-8289e.firebaseapp.com",
  projectId: "workspacefinder-8289e",
  storageBucket: "workspacefinder-8289e.firebasestorage.app",
  messagingSenderId: "789802182385",
  appId: "1:789802182385:web:7f06f693f98782b21eeb50",
  measurementId: "G-0EJDF6K6MD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);