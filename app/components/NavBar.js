import React from 'react'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <div className='border-b w-full dark:bg-gray-800 light:bg-gray-200'>
      <div className="flex justify-between items-center p-4 mx-auto max-w-6xl">
        <div id="logo">
          <h1
            className='dark:text-white font-bold text-xl'
          >
            Key<span className='text-blue-500'>Bored!</span>
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default NavBar