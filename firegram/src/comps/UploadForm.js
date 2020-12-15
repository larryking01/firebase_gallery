import React, { useState } from 'react'



const UploadForm = ( ) => {

    //handling state.
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)

    //array to define allowed types
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (event) => {
        let selected = event.target.files[0]

        if(selected && types.includes(selected.type)) {
            setError('')
            setFile(selected)
            console.log(file)
        }else {
            setFile(null)
            setError('Please select an image (jpeg or png)')
        }
        
    }


    return (
        <div>
            <form>
                <label>
                <input type='file' onChange={ changeHandler } />
                <span>+</span>
                </label>
                <div>
                    { error && <div className='output'> { error } </div> }
                    { file && <div className='output'> <br /> { file.name } </div> }
                </div>
            </form>
        </div>
    )
}




export default UploadForm