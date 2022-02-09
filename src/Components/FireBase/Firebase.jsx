import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC3xdkMK1dFKvjkskan6EBvukbyg0XFWWA",
    authDomain: "pruebas-andres-b1f84.firebaseapp.com",
    projectId: "pruebas-andres-b1f84",
    storageBucket: "pruebas-andres-b1f84.appspot.com",
    messagingSenderId: "466246305775",
    appId: "1:466246305775:web:a32ca3289897e46dbb181a"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}