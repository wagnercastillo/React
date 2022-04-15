import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyA0f75OmhN1lmfSRtwmyG2FilLpUDE7S0o",
	authDomain: "react-app-auth-fb201.firebaseapp.com",
	projectId: "react-app-auth-fb201",
	storageBucket: "react-app-auth-fb201.appspot.com",
	messagingSenderId: "892394925855",
	appId: "1:892394925855:web:abd5d183202b082218ca2a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}