// custom hook to save a selected file into firebase storage and firestore.
import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage, timestamp } from '../firebase/firebase'



const useStorage = (file) => {
    // setting up state.
    const [ progress, setProgress ] = useState(0)
    const [ url, setUrl ] = useState(null)
    const [ error, setError ] = useState(null)


    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('pictures')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = Math.floor(( snap.bytesTransferred / snap.totalBytes ) * 100)
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
            let fetched_url = await storageRef.getDownloadURL()
            setUrl(fetched_url)
            let createdAt = timestamp()
            collectionRef.add({url: fetched_url, createdAt})
        })

    }, [file])

    return { progress, url, error }
}



// exporting
export default useStorage
