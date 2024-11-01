'use client'
import { useEffect, useState } from "react";

const DefaultKey = ({ keyCode = 'KeyA', keyName = 'A', keyWidth = '50px', textAlign = 'start' }) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [keyDown, setKeyDown] = useState(false);

  useEffect(() => {
    // Function to handle the key press event
    const handleKeyDown = (event) => {
      event.preventDefault();
      if (event.code === keyCode) {
        setKeyDown(true);
        setKeyPressed(true);
        console.log(event.code, ' pressed');
      }

    }

    // Function to handle the key up event
    const handleKeyUp = (event) => {
      if (event.code === keyCode) {
        event.preventDefault();
        setKeyDown(false);
      }
    }

    // Adding event listener for keydown
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);


  return (
    <div className={`relative w-[${keyWidth}] h-12 ${keyDown ? 'pt-[3px]' : 'pt-0'} transition-all duration-75`}>
      <div className={`w-full h-full bg-purple-900 rounded-[10PX] px-[3px]  pt-[3px] 
      ${keyDown ? 'pb-[3px]' : 'pb-1.5'}
      `}
      >
        <div className={`rounded-[7PX]
        ${keyDown ? 'bg-[#ffcc00]' : (keyPressed ? 'bg-purple-800' : 'bg-purple-300')}
        w-full h-full px-2`}>
          <p className={`${keyDown && '!text-purple-900'}
        ${keyPressed ? 'text-purple-300' : 'text-purple-900'} 
        text-lg font-bold w-full text-${textAlign}`}>{keyName}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultKey;
