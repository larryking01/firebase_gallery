// modules
import firebase from 'firebase/app'
import 'firebase/firestore'         // the cloud firestore sdk
import 'firebase/storage'          //  the firebase storage sdk


// the firebase configuration object
let firebaseConfig = {
    apiKey: "AIzaSyAoTmGZQkLbRBaFoo4hz0e5VZPfF52xg60",
    authDomain: "firegram-6110f.firebaseapp.com",
    projectId: "firegram-6110f",
    storageBucket: "firegram-6110f.appspot.com",
    messagingSenderId: "190126009482",
    appId: "1:190126009482:web:983df561c7cfb69a679173"
}


// initializing firebase app.
try {
firebase.initializeApp( firebaseConfig )
}
catch (err) {
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
}}


// initializing cloud firestore
const projectFirestore = firebase.firestore()

// initializing firebase storage
const projectStorage = firebase.storage()

// initializing timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp


// exporting
export { projectFirestore, projectStorage, timestamp }

