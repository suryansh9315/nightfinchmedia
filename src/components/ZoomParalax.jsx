'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const ZoomParalax = () => {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3])

    return (
        <div className='relative h-[200vh]'>
            <div className='sticky top-0 h-[100vh] overflow-hidden bg-black'>
                <div className="flex items-center justify-center absolute top-0 h-full w-full">
                    <motion.div style={{ scale: scale4 }} className="relative w-3/4 h-3/4">
                        <Image src={"/9.png"} alt='image' fill className='object-cover' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ZoomParalax