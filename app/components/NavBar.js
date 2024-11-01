import React from 'react'
import ThemeToggle from './ThemeToggle'
import { IconKeyboard } from '@tabler/icons-react'

const NavBar = () => {
  return (
    <div className='border-b dark:border-gray-700 w-full dark:bg-gray-900 light:bg-gray-200'>
      <div className="flex justify-between items-center p-4 mx-auto max-w-6xl">
        <div id="logo">
          <h1
            className='dark:text-white font-bold text-xl flex items-center justify-center'
          >
            Key<span className='text-purple-500'>Bored!</span><IconKeyboard />
          </h1>
        </div>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  )
}

export default NavBar