//importing the modules.
import firebase from 'firebase/app' 
import 'firebase/storage'  //importing the firebase storage sdk to use firebase storage
import 'firebase/firestore'  //importing the firestore sdk to use firebase firestore



let firebaseConfig = {
    apiKey: "AIzaSyAoTmGZQkLbRBaFoo4hz0e5VZPfF52xg60",
    authDomain: "firegram-6110f.firebaseapp.com",
    projectId: "firegram-6110f",
    storageBucket: "firegram-6110f.appspot.com",
    messagingSenderId: "190126009482",
    appId: "1:190126009482:web:983df561c7cfb69a679173"
}



// initialize firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()         // initializing firebase storage
const projectFirestore = firebase.firestore()    //  initializing firebase firestore



export { projectStorage, projectFirestore }   //exporting the variables

