import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAS2wF9P_T18N9UM2IIXiqFY7LR6wCerqg",
    authDomain: "nerds--blog.firebaseapp.com",
    projectId: "nerds--blog",
    storageBucket: "nerds--blog.appspot.com",
    messagingSenderId: "866423656317",
    appId: "1:866423656317:web:372dabea41f1d6b304c614",
    measurementId: "G-PN9ML8EPG2"
};

// firebase.initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 

export {auth , provider};