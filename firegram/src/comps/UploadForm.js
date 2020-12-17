import React, { useState } from 'react'
import ProgressBar from './ProgressBar'


export default function UploadForm() {
    // setting the selected file.
    const [file, setFile] = useState(null)

    // array to hold valid file types.
    let validTypes = ['image/png', 'image/jpeg']


    // handler for when a file is selected
    const fileSelected = (event) => {
        let selectedFile = event.target.files[0]
        
        // validating the selected file
        if(selectedFile && validTypes.includes(selectedFile.type)){
            setFile(selectedFile)
        }else {
            setFile(null)
            alert('Invalid file selected. \nSelect an image file (jpeg/png)')
        }
    }

    return (
        <form>
            <input type='file' className='upload-input' onChange={fileSelected} />
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </form>
    )
}
