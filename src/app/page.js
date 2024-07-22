import Cursor from '@/components/Cursor'
import HomeProjects from '@/components/HomeProjects'
import HomeServices from '@/components/HomeServices'
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
      <HomeProjects />
    </div>
  )
}

export default Home