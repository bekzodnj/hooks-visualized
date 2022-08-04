import { useState } from 'react';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStateCodeString = `const [fruit, setFruit] = useState(null);`;
const FruitComponentCodeString = `// ...
<p>Select your favorite fruit:</p>
  <div>
    {fruits.map((fruit) => (
      <button onClick={() => { setFruit(fruit) }}>
        <span>{fruit.emoji}</span>
      </button>
    ))}
  </div>

<p> Great! <span>{fruit.name} {fruit.emoji}!</span></p>
`;

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
];

interface IFruit {
  name: string;
  emoji: string;
}

export const State = () => {
  const [fruit, setFruit] = useState<IFruit | null>(null);

  const stateObjectCodeString = `// current state:
  fruit = {
    name: ${fruit?.name}
    emoji: ${fruit?.emoji}
  }`;

  return (
    <div className='h-full bg-darknightblue text-white'>
      <div className='h-full grid grid-cols-1 sm:grid-cols-2'>
        <section className='border border-sky-900 p-2'>
          <h2 className='font-mono text-xl mb-2'>useState example</h2>
          <h3 className='text-lg'>Select your favorite fruit:</h3>
          <div className='flex flex-wrap mb-2'>
            {fruits.map((fruit) => (
              <button
                key={fruit.name.toString()}
                className='bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100'
                onClick={() => {
                  setFruit(fruit);
                }}
              >
                <span className='text-4xl'>{fruit.emoji}</span>
              </button>
            ))}
          </div>
          {fruit ? (
            <p className={`text-xl`}>
              Great!{' '}
              <span>
                {fruit.name} {fruit.emoji}!
              </span>
            </p>
          ) : (
            <p className={`text-2xl`}>...</p>
          )}
        </section>

        <section className='overflow-x-scroll p-2'>
          <div className=''>
            <h2 className='font-mono text-xl'>useState</h2>
            <div className='mb-4'>
              <p>
                Adds state variable in functional components, without writing a
                class.
              </p>

              <SyntaxHighlighter
                language='jsx'
                style={oneDark}
                wrapLines={true}
                wrapLongLines={true}
              >
                {useStateCodeString}
              </SyntaxHighlighter>
            </div>

            <div className='mb-4'>
              <p>Current state:</p>
              <SyntaxHighlighter
                language='jsx'
                style={oneDark}
                wrapLines={true}
                wrapLongLines={true}
              >
                {stateObjectCodeString}
              </SyntaxHighlighter>
            </div>

            <div className=''>
              <p>Example of setting the state:</p>
            </div>
            <SyntaxHighlighter
              language='jsx'
              style={oneDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {FruitComponentCodeString}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  );
};
