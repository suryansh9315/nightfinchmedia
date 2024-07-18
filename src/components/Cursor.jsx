'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Cursor = () => {
    const size = 30;
    const lerp = (x, y, a) => x * (1-a) + y * a 
    const circle = useRef()
    const mouse = useRef({
        x: 0,
        y: 0
    })
    const delayedMouse = useRef({
        x: 0,
        y: 0
    })

    const updateMouse = (e) => {
        mouse.current = {
            x: e.clientX,
            y: e.clientY
        }
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
    }

    const animate = () => {
        const { x, y } = delayedMouse.current
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.1),
            y: lerp(y, mouse.current.y, 0.1)
        }
        moveCircle(delayedMouse.current.x, delayedMouse.current.y)
        window.requestAnimationFrame(animate)
    }

    useEffect(() => {
        animate()
        window.addEventListener('mousemove', updateMouse)
        return () => {
            window.removeEventListener('mousemove', updateMouse)
        }
    }, [])


    return (
        <div ref={circle} className='blur-0 mix-blend-difference fixed top-0 left-0 bg-[#08eed1] rounded-full z-10' style={{ height: size, width: size }} />
    )
}

export default Cursor