import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'


export default function ImageGrid({ setSelectedImage }) {
    const { imageUrls } = useFirestore('pictures')
    console.log(imageUrls)


    return (
        <div className='img-grid' >
            { imageUrls && imageUrls.map(eachUrl => (
                <motion.div className='img-wrap' key={eachUrl.id} 
                  whileHover={{opacity: 1}} layout
                  onClick={() => setSelectedImage(eachUrl.url)} > 
                    <motion.img src={eachUrl.url} alt='nature' 
                       initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 1}} />
                </motion.div>
            )) }
            
        </div>
    )
}
