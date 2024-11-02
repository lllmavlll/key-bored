import React from 'react'

const DummyKey = ({ keyDown = false, keyPressed = false, keyName = 'A', keyWidth = '50px', keyHeight = '48px', textAlign = 'start' }) => {
  return (
    <div
      className={`
        relative h-[${keyHeight}] transition-all duration-75
        w-[${keyWidth}] 
        min-w-[${keyWidth}] 
        max-w-[${keyWidth}] 
        ${keyDown ? 'pt-[3px]' : 'pt-0'}
      `}
    >
      <div
        className={`
          w-full h-full bg-purple-800 rounded-[10px] px-[3px] pt-[3px]
          ${keyDown ? 'pb-[3px]' : 'pb-[6px]'}
        `}
      >
        <div
          className={`
            w-full h-full px-2 py-1 rounded-[7px]
            ${keyDown
              // ? 'bg-[#ffcc00]' 
              ? 'bg-[#93ff9a]'
              : keyPressed
                ? 'bg-purple-600'
                : 'bg-purple-200'
            }
          `}
        >
          <p
            className={`
              text-sm font-bold w-full leading-none tracking-tight
              text-${textAlign}
              ${keyDown
                ? '!text-purple-800'
                : keyPressed
                  ? 'text-purple-200'
                  : 'text-purple-800'
              }
            `}
          >
            {keyName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DummyKey