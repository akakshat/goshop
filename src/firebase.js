import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJFHH_1mGNg3SRbtuFgcDVZBQq_2OYLbI",
    authDomain: "clone-2d7c1.firebaseapp.com",
    projectId: "clone-2d7c1",
    storageBucket: "clone-2d7c1.appspot.com",
    messagingSenderId: "196333133069",
    appId: "1:196333133069:web:a6ea65c34fa7dae0692444",
    measurementId: "G-ZCCSK0VGXL"
});


const auth = firebase.auth();

export { auth };
