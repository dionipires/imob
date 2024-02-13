// src/config/firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Se você também estiver usando o Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBwDf0d8zfClRaJwEhNc_G9JMGkeJuJ35o",
    authDomain: "imob-auth.firebaseapp.com",
    projectId: "imob-auth",
    storageBucket: "imob-auth.appspot.com",
    messagingSenderId: "350349279772",
    appId: "1:350349279772:web:2834a67830bbf6fc5315d9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();