// // Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiOoRKZhdZH9Y5EJd74EuLC3MrlCpEcvg",
    authDomain: "redux-toolkit-79af8.firebaseapp.com",
    projectId: "redux-toolkit-79af8",
    storageBucket: "redux-toolkit-79af8.appspot.com",
    messagingSenderId: "537740383734",
    appId: "1:537740383734:web:bc731ac1b71efdcc2223d7",
    //   databaseURL: "https://redux-toolkit-79af8-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);