import Cursor from '@/components/Cursor'
import ImageGallery from '@/components/ImageGallery'
import TextReveal from '@/components/TextReveal'
import ZoomParalax from '@/components/ZoomParalax'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Cursor />
      <ZoomParalax />
      <TextReveal />
      <ImageGallery />
      <div className='h-screen'></div>
    </div>
  )
}

export default Home