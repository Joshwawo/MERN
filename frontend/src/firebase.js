// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX-49MUR-FfpKlE9rErFooPDj03Fxd6tk",
  authDomain: "imagestest-e54ef.firebaseapp.com",
  projectId: "imagestest-e54ef",
  storageBucket: "imagestest-e54ef.appspot.com",
  messagingSenderId: "856276485524",
  appId: "1:856276485524:web:88e746b01e86b7e2b83b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

