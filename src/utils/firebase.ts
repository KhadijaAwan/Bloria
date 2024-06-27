import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "bloria-253c1.firebaseapp.com",
    projectId: "bloria-253c1",
    storageBucket: "bloria-253c1.appspot.com",
    messagingSenderId: "673246107856",
    appId: "1:673246107856:web:24a6b59de531e44fe466d5"
};

export const app = initializeApp(firebaseConfig);