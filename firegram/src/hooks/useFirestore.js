// custom hook to fetch url of pictures saved inside cloud firestore.
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/firebase'



const useFirestore = (collection) => {
    const [ imageUrls, setImageUrls ] = useState([])

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
          .orderBy('createdAt', 'desc')
          .onSnapshot((snap) => {
            let urlsArray = []
            snap.forEach(doc => {
                urlsArray.push({...doc.data(), id: doc.id })
            }) 
            setImageUrls(urlsArray)
        })

        // unsubscribing from the collection.
        return () => unsubscribe()
    }, [collection])

    return { imageUrls }
}


export default useFirestore



