// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaYX-GTROxSpViKTC4Dh61AIie5svijYU',
  authDomain: 'rick-and-morty-library.firebaseapp.com',
  projectId: 'rick-and-morty-library',
  storageBucket: 'rick-and-morty-library.appspot.com',
  messagingSenderId: '743416786960',
  appId: '1:743416786960:web:a232844712e81d4c841a95',
  measurementId: 'G-GV6K4DK6SH'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);