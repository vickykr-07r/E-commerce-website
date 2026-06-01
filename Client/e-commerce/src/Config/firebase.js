
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNWL3ZWBGiAcxAR_31_BSCZ2BwOYyGVwo",
  authDomain: "e-commerce-website-191c3.firebaseapp.com",
  projectId: "e-commerce-website-191c3",
  storageBucket: "e-commerce-website-191c3.firebasestorage.app",
  messagingSenderId: "532586059737",
  appId: "1:532586059737:web:bc9d3eee8057eb49b52bc8",
  measurementId: "G-1JYX3ZHXFD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();