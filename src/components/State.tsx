import { useState } from 'react';

const fruits = [
  {
    name: 'Tangerine',
    emoji: '🍊',
  },
  {
    name: 'Pineapple',
    emoji: '🍍',
  },
  {
    name: 'Lemon',
    emoji: '🍋',
  },
  {
    name: 'Watermelon',
    emoji: '🍉',
  },
  {
    name: 'Banana',
    emoji: '🍌',
  },
  {
    name: 'Apple',
    emoji: '🍎',
  },
];

export const State = () => {
  const [fruit, setFruit] = useState('');
  return (
    <div className='h-screen bg-litblue text-white'>
      <div>
        <p>Select your favorite fruit:</p>
        <div className='flex space-x-3 mb-2'>
          {fruits.map((fruit) => (
            <button
              className='bg-gray-100 p-2 shadow-md rounded active:bg-orange-100'
              onClick={() => setFruit(fruit.name)}
            >
              <span className='text-4xl'>{fruit.emoji}</span>
            </button>
          ))}
        </div>
        {!!fruit && <p>Great! You selected {fruit}</p>}
      </div>
    </div>
  );
};
