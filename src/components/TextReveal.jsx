'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const TextReveal = () => {
    const paragraph = "Established in 2021, our company has been at the forefront of the creative industry, handling a wide range of major projects. Our expertise spans video making, film production, ad creation, music mixing, event production management, editing, and photography"
    const words = paragraph.split(" ")
    const textRef = useRef()
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start 0.8", "start 0.1"]
    })

    return (
        <div className=' bg-white mx-20 h-[100vh] flex items-center'>
            <div className='flex flex-wrap w-1/2' ref={textRef}>
                {words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })}
            </div>
        </div>
    )
}

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className='relative mr-3 mt-3 text-5xl'>
            <span className='absolute opacity-10'>{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    )
}

export default TextReveal