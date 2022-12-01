// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw-VqQ5J7hzGg5UVlLYDSdQW94N6Khf9s",
    authDomain: "future-tab.firebaseapp.com",
    projectId: "future-tab",
    storageBucket: "future-tab.appspot.com",
    messagingSenderId: "915335926178",
    appId: "1:915335926178:web:9b6f97f7354a7d05f922fb",
    measurementId: "G-VKDPV69RV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
