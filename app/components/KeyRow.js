import React from 'react'
import DefaultKey from './DefaultKey'

const KeyRow = ({ keys }) => {
  return (
    <div className='bg-purple-50 flex flex-wrap gap-1 rounded-lg '>
      {keys.map((key, index) => (
        <DefaultKey key={index} keyCode={key?.keyCode} keyName={key?.keyName} keyWidth={key?.keyWidth} textAlign={key?.textAlign} altName={key?.altName} />
      ))}
    </div>
  )
}

export default KeyRow