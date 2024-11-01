import React from 'react'
import { row1, row2, row3, row4, row5, row6, row7 } from '../utils/keys'
import KeyRow from './KeyRow'
import DefaultKey from './DefaultKey'

const MainBoard = () => {
  return (
    <div className="py-40 px-4 flex justify-center items-center dark:bg-gray-900 light:bg-tanBgColor">
      <div className='px-2 pt-2 pb-4 bg-purple-900 rounded-xl flex '>
        <div className='bg-purple-50 rounded-lg px-5 pt-5 pb-10 flex flex-col gap-2'>
          <KeyRow keys={row1} />
          <KeyRow keys={row2} />
          <KeyRow keys={row3} />
          <KeyRow keys={row4} />
          <KeyRow keys={row5} />
          <KeyRow keys={row6} />
          <div className='bg-purple-50 flex flex-wrap gap-1 rounded-lg ml-[728px]'>
            {row7.map((key, index) => (
              <DefaultKey key={index} keyCode={key.keyCode} keyName={key.keyName} keyWidth={key.keyWidth} textAlign={key.textAlign} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBoard
