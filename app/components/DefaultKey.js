'use client'
import { useEffect, useState } from "react";
import { useUIcontext } from "../context/UIcontextAPI";

const DefaultKey = ({
  keyCode = 'KeyA',
  keyName = 'A',
  keyWidth = '50px',
  keyHeight = '48px',
  textAlign = 'start',
  altName
}) => {

  const { pressedKeys, setPressedKeys } = useUIcontext();
  const [keyPressed, setKeyPressed] = useState(false);
  const [keyDown, setKeyDown] = useState(false);
  
  useEffect(() => {
    // Function to handle the key press event
    const handleKeyDown = (event) => {
      if (event.code === keyCode) {
        console.log(pressedKeys);
        event.preventDefault();
        setPressedKeys(prevKeys => [{ keyName, altName }, ...prevKeys]);
        setKeyDown(true);
      }
    }

    // Function to handle the key up event 
    const handleKeyUp = (event) => {
      if (event.code === keyCode) {
        event.preventDefault();
        setKeyPressed(true);
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
  }, [keyCode]); // Add all dependencies


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
  );
};

export default DefaultKey;
