//the modules.
import firebase from 'firebase/app'      // importing firebase
import 'firebase/storage'               // to use firebase storage
import 'firebase/firestore'            // to use the cloud firestore database


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
firebase.initializeApp( firebaseConfig )

// initializing firebase storage
let projectStorage = firebase.storage()

// initializing cloud firestore
let projectFirestore = firebase.firestore()


// exporting so that they can be used in other files.
export { projectStorage, projectFirestore } 


