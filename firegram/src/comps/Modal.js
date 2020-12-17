import React from 'react'
import { motion } from 'framer-motion'



export default function Modal({ selectedImage, setSelectedImage }) {

    //handle modal click
    const handleClick = ( event ) => {
        if(event.target.classList.contains('backdrop'))
           setSelectedImage(null)
    }

    return (
        <motion.div className='backdrop' onClick={ handleClick }
           initial={{opacity : 0}} animate={{opacity: 1}} transition={{delay: 0.2}} >
            <motion.img src={ selectedImage } alt='pics' 
                initial={{ y: '-100vh' }} animate={{ y: 0 }} />
        </motion.div>
    )
}
