import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'



export default function ProgressBar({ file, setFile }) {
    let { progress, url, error } = useStorage(file) 

    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [url, setFile])


    return (
        <motion.div className='progress-bar' initial={{width: 0}} animate={{ width: progress + '%'}} >
            { error && <h2> failed to upload file due to { error } </h2>}
            { progress < 100 ? <h2> uploading...{progress}% </h2> : <h2> uploaded successfully </h2> }
        </motion.div>
    )
}
