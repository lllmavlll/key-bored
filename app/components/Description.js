import { IconKeyboard } from '@tabler/icons-react';
import React from 'react';
import DefaultKey from './DefaultKey';
import DummyKey from './DummyKey';

const Description = () => {

  const content = {
    welcome: {
      title: "Welcome to KeyBored – Typing Comes to Life!",
      description: "Ever curious about the feel and flow of your own typing style? KeyBored brings every keystroke to life in a vibrant, interactive way by highlighting each key as you press it. It's more than just a visual typing test; it's a unique look into the rhythm of your typing. See if you're a smooth typist or more of a \"hunt-and-peck\" kind of person—every style is welcome here!"
    },
    features: {
      title: "What Can You Do with KeyBored?",
      list: [
        {
          id: 1,
          text: "Keyboard Testing: Ensure your keyboard is fully functional by seeing which keys light up. Great for catching stuck or unresponsive keys."
        },
        {
          id: 2,
          text: "Typing Practice: Improve typing speed and accuracy as you enjoy real-time feedback on every keypress."
        },
        {
          id: 3,
          text: "Personal Style Check: Just for fun, observe the way you type—fast and rhythmic or precise and deliberate? Discover your unique typing style!"
        }
      ]
    }
  };

  return (
    <div className='dark:bg-gray-900 light:bg-tanBgColor dark:text-white light:text-gray-900'>
      <div className=" flex flex-col justify-between items- px-4 mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">{content.welcome.title}</h1>
        <p className="text-lg mt-8">{content.welcome.description}</p>


        <h1 className="text-2xl font-bold mt-8">How to Get Started?</h1>
        <p className="text-lg mt-8">Simply start typing, and watch the screen respond to every key you press. KeyBored runs smoothly on all major browsers, so you can dive right in with no setup required.</p>
        <div className='flex flex-col items-start  '>
          <div className='flex gap-8 items-center mt-4'>
            <DummyKey keyName='F' />
            <p className="text-lg"><span className='font-bold'>Initial state</span> - The key appears in a light purple color, indicating it's ready to be pressed. This is how all keys look before any interaction.</p>
          </div>
          <div className='flex gap-8 items-center mt-4'>
            <DummyKey keyName='F' keyDown={true} />
            <p className="text-lg"><span className='font-bold'>Active press</span> - When you're actively pressing the key, it shifts slightly downward and turns green, providing visual feedback that the key is being pressed.</p>
          </div>
          <div className='flex gap-8 items-center mt-4'>
            <DummyKey keyName='F' keyPressed={true} />
            <p className="text-lg"><span className='font-bold'>Previously pressed</span> - After releasing the key, it changes to a darker purple shade, showing that this key has been pressed at least once during your session.</p>
          </div>
        </div>
        <p className="text-lg mt-8">KeyBored – because every keystroke has a story to tell!</p>
        <h1 className="text-2xl font-bold mt-8">{content.features.title}</h1>
        <ul className="list-disc text-lg mt-8 ml-6">
          {content.features.list.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Description;
