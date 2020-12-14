import React, { useState } from 'react'



const UploadForm = () => {
    //handling state
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)


    //specifying the allowed file types.
    const types = ['image/png', 'image/jpeg']



    //updating change in input
    const changeHandler = (event) => {
        let selected = event.target.files[0]

        if(selected && types.includes(selected.type) ) {
            setFile(selected)
            setError('')
            console.log(file)
        } else {
            setFile(null)
            setError('Please select an image (jpeg or png)')
        }

       
    }

    return (
        <div>
            <form>
                <input type='file' onChange={changeHandler} />
                <div className='output'>
                    { error && <div className='error'> {error} </div>  }

                </div>
            </form>
        </div>
    )
}



export default UploadForm 