// custom hook to store image files into firebase storage.
import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/firebase'


// the component.
const useStorage = ( file ) => {
    const [ progress, setProgress ] = useState(0)
    const [ error, setError ] = useState(null)
    const [ url, setUrl ] = useState(null)


    useEffect(() => {
        // references or where the file should be saved.
        let storageRef = projectStorage.ref(file.name)

        //actually saving the file
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        } )
    }, [file])

    return { progress, url, error }
}


export default useStorage