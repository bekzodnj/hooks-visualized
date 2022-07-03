import { useState, useEffect } from 'react';

const fruits = [
  {
    name: 'A tangerine',
    emoji: '🍊',
  },
  {
    name: 'A pineapple',
    emoji: '🍍',
  },
  {
    name: 'A lemon',
    emoji: '🍋',
  },
  {
    name: 'A watermelon',
    emoji: '🍉',
  },
  {
    name: 'A banana',
    emoji: '🍌',
  },
  {
    name: 'An apple',
    emoji: '🍎',
  },
];

interface IFruit {
  name: string;
  emoji: string;
}

export const State = () => {
  const [fruit, setFruit] = useState<IFruit | null>({
    name: 'Kiwi',
    emoji: '🥝',
  });

  const [animationName, setAnimationName] = useState('');

  useEffect(() => {
    const timerID = setTimeout(() => setAnimationName(''), 300);

    return () => {
      clearInterval(timerID);
    };
  }, [fruit]);

  return (
    <div className='h-screen bg-litblue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 border border-yellow-200'>
        <section className='border border-sky-800'>
          <p className='text-lg'>Select your favorite fruit:</p>
          <div className='flex flex-wrap mb-2'>
            {fruits.map((fruit) => (
              <button
                className='bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100'
                onClick={() => {
                  setFruit(fruit);
                  setAnimationName('animate-pulse');
                }}
              >
                <span className='text-4xl'>{fruit.emoji}</span>
              </button>
            ))}
          </div>
          {!!fruit && (
            <p className={`text-2xl`}>
              Great!{' '}
              <span className={`${animationName}`}>
                {fruit.name} {fruit.emoji}!
              </span>
            </p>
          )}
        </section>
        <section className='overflow-x-scroll'>
          <p className='font-mono'>const [fruit, setFruit] = useState(null);</p>
          <p className='font-mono text-green-500'>
            // fruit = {JSON.stringify(fruit)}
          </p>
        </section>
      </div>
    </div>
  );
};
