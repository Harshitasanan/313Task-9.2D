import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyD-FRLBUxuhGxVyYEqHoRSdz328v9EHFSk",
  authDomain: "signup-363d7.firebaseapp.com",
  projectId: "signup-363d7",
  storageBucket: "signup-363d7.appspot.com",
  messagingSenderId: "210601012284",
  appId: "1:210601012284:web:416544211bb5e096dde739",
  measurementId: "G-JFN25BC1HT"
});

export const auth = getAuth(app);
export default app;
