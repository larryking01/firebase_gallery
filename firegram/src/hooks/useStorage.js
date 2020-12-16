import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/firebase'



const useStorage = ( file ) => {
    const [ progress, setProgress ] = useState(0)
    const [ error, setError ] = useState(null)
    const [ url, setUrl ] = useState(null)


    // logic to store data
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = Math.floor((snap.bytesTransferred / snap.totalBytes )) * 100
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt})
        })

    }, [file])

    return { progress, error, url }

}


export default useStorage
