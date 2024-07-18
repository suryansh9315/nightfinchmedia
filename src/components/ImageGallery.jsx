'use client'
import { Images } from '@/utils/constants'
import { useTransform, useScroll, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useWindowSize } from '@darkroom.engineering/hamo'

const ImageGallery = () => {
    const containerRef = useRef()
    const { height } = useWindowSize()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, height*1.5])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height*2])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height*2.5])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height*1.25])

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])


    return (
        <div ref={containerRef} className='flex flex-row gap-[2vw] p-[2vw] h-[175vh] bg-black overflow-hidden'>
            <Column images={[Images[1], Images[2], Images[3]]} y={y} top="-top-[45%]" />
            <Column images={[Images[4], Images[5], Images[6]]} y={y2} top="-top-[75%]" />
            <Column images={[Images[7], Images[8], Images[9]]} y={y3} top="-top-[65%]"/>
            <Column images={[Images[10], Images[11], Images[12]]} y={y4} top="-top-[45%]" />
        </div>
    )
}

const Column = ({ images, y = 0, top }) => {
    return (
        <motion.div style={{ y }} className={`w-1/4 h-full flex flex-col min-w-[250px] gap-[2vw] relative ${top}`}>
            {images.map((image, index) => (
                <div key={index} className='w-full h-full overflow-hidden rounded-[1vw] relative'>
                    <Image src={`/${image}`} fill alt='image' className='object-cover' />
                </div>
            ))}
        </motion.div>
    )
}

export default ImageGallery