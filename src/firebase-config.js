import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqW5Doo2cvqRvPmcSeL2CHhXjkr4MbWPo",
    authDomain: "react-js-3eb24.firebaseapp.com",
    databaseURL: "https://react-js-3eb24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-js-3eb24",
    storageBucket: "react-js-3eb24.appspot.com",
    messagingSenderId: "350698758517",
    appId: "1:350698758517:web:18df206140911c4aaef33c"
};

export const app = initializeApp(firebaseConfig);