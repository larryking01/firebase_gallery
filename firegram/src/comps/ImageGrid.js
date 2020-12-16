import React from 'react'
import useFirestore from '../hooks/useFirestore'



export default function ImageGrid() {
    const { docs } = useFirestore('images')
    console.log('docs = ', docs)

    return (
        <div className='image-grid'>
            { docs && docs.map((doc) => (
                <div className='img-wrap' key={doc.id}> 
                    <img src={doc.url} alt='images' />
                </div>
            )) }
        </div>
    )
}
