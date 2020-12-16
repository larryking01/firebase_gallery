import React, { useState } from 'react'
import ProgressBar from './ProgressBar'


export default function UploadForm() {
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)


    // the array containing the valid types
    let types = ['image/jpeg', 'image/png'] 


    // handler for when a file is selected.
    const changeHandler = ( event ) => {
        let selectedFile = event.target.files[0]
        
        if(selectedFile && types.includes(selectedFile.type)){
            setError('')
            setFile(selectedFile)
            console.log(file)
        }else {
            setError('invalid selection, select an image(jpeg/png)')
        }

    }



    return (
        <div>
            <form>
                <input type='file' onChange={changeHandler} />
                { error && <div className='output'> { error } </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </form>
            
        </div>
    )
}
