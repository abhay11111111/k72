import React from 'react'

const Video = () => {
  return (
    <div>
      <video className='h-full w-full object-cover' autoPlay loop muted src="../../../public/vid.mp4"></video>
    </div>
  )
}

export default Video
