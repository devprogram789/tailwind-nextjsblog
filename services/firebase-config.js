import { initializeApp ,getApps} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjBbzhepKS9Z1eNUcQTALpUtzJgKbFPZw",
  authDomain: "test-90c8f.firebaseapp.com",
  databaseURL: "https://test-90c8f.firebaseio.com",
  projectId: "test-90c8f",
  storageBucket: "test-90c8f.appspot.com",
  messagingSenderId: "864825689268",
  appId: "1:864825689268:web:ae1acda1cbea0eb31983e1",
  measurementId: "G-NRL93CL4WW"
};

const app = initializeApp(firebaseConfig);

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);

export const db = getFirestore();

export default firebase_app;