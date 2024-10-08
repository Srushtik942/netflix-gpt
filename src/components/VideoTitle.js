import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>

    <h1 className='text-4xl font-bold'>{title}</h1>
    <p className='py-6 text-md w-1/4'>{overview}</p>
    <div className=''>
        <button className=' text-white p-1 px-6 mx-3 bg-gray-600 text-lg bg-opacity-50 rounded-md '> ▶Play</button>
        <button className=' text-white p-1 px-6 bg-gray-600 text-lg bg-opacity-50 rounded-md '>More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle
