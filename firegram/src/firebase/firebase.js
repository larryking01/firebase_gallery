import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
//import 'firebase/auth'



// the firebase configuration object
let firebaseConfig = {
    apiKey: "AIzaSyAoTmGZQkLbRBaFoo4hz0e5VZPfF52xg60",
    authDomain: "firegram-6110f.firebaseapp.com",
    projectId: "firegram-6110f",
    storageBucket: "firegram-6110f.appspot.com",
    messagingSenderId: "190126009482",
    appId: "1:190126009482:web:983df561c7cfb69a679173"
}


// initializing firebase
try {
    firebase.initializeApp(firebaseConfig)
}
catch(error) {
    if(!/already exists/.test(error.message)){
        console.log('firebase initialization error', error.stack)
    }
}


// initializing firestore, storage and a timestamp
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


// exporting
export { projectFirestore, projectStorage, timestamp }






