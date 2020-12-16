import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'



export default function ProgressBar({ file, setFile }) {

    const { progress, url } = useStorage(file)
    
    useEffect(() => {
        if(url) {
            setFile(null)
            console.log(url)
        }
    }, [url, setFile])



    return (
        <div className='progress-bar'  style={{ width: progress + '%' }}>
            { progress === 100 ? <h2> file uploaded...</h2> : <h2> uploading...{progress}% </h2>}
            <br /> <br /> <br /> <br /> 
        </div>
    )
}
