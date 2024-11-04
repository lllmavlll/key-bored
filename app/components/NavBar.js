import React from 'react'
import { IconKeyboard } from '@tabler/icons-react'

const NavBar = () => {
  return (
    <div className=' w-full dark:bg-gray-900 light:bg-gray-200'>
      <div className="border-b border-purple-900/30 flex justify-between items-center p-4 mx-auto max-w-6xl">
        <div id="logo">
          <h1
            className='dark:text-white font-bold text-xl flex items-center justify-center'
          >
            Key<span className='text-purple-700'>Bored!</span><IconKeyboard />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default NavBar