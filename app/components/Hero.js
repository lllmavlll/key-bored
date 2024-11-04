import React from 'react'
import PressedKeyList from './PressedKeyList'

const Hero = () => {
  return (
    <div className='px-4 flex flex-col items-center justify-center pt-10'>
      <h1 className='text-6xl text-purple-950 font-bold'>Welcome to KeyBored</h1>
      <div className=' w-full max-w-5xl mx-auto'>
        <PressedKeyList />
      </div>
    </div>
  )
}

export default Hero