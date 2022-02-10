// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD1igk8BT2p-iXX3p2tPzotg3i9gLg5Vm8",
	authDomain: "instagram-reels-26c90.firebaseapp.com",
	projectId: "instagram-reels-26c90",
	storageBucket: "instagram-reels-26c90.appspot.com",
	messagingSenderId: "516249298336",
	appId: "1:516249298336:web:2736bd6b2324b3794bb0c5",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
