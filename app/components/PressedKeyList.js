'use client'
import { useUIcontext } from '../context/UIcontextAPI';

const PressedKeyList = () => {
  const { pressedKeys } = useUIcontext();
  return (
    <div className='border border-purple-900 px-4 py-6 rounded-md mt-10 w-full max-w-5xl shadow-lg '>
      <div className='flex gap-2 overflow-x-auto hideScrollbar'>

        {pressedKeys?.length > 0 ? pressedKeys.map((key, index) => (
          // <DummyKey key={key?.keyName} keyName={key?.altName || key?.keyName} keyWidth='50px'/>
          <div key={index} className={`
        ${index === 0 ? 'bg-purple-300 border-purple-600' :
              index === 1 ? 'bg-purple-300/70 border-purple-600/70' :
                index === 2 ? 'bg-purple-200 border-purple-500/80' :
                  index === 3 ? 'bg-purple-200/70 border-purple-500/70' :
                    index === 4 ? 'bg-purple-200/50 border-purple-500/60' :
                      index === 5 ? 'bg-purple-100 border-purple-400/80' :
                        index === 6 ? 'bg-purple-100/70 border-purple-400/60' :
                          'bg-purple-100/50 border-purple-400/40'
            }  border  px-3 py-1 rounded-md text-center`}>
            <p className='text-purple-700 w-full whitespace-nowrap text-lg'>{key?.altName || key?.keyName}</p>
          </div>
        )) :
          <div className=' px-2.5 py-[5px] rounded-md'>
            <p className='text-purple-700 font-semibold text-lg'>Start typing, click click click...</p>
          </div>
        }
      </div>
    </div>
  )
}

export default PressedKeyList;