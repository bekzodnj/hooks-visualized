import { useState, useEffect } from 'react';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

const useStateCodeString = `const [fruit, setFruit] = useState(null);`;
const FruitComponentCodeString = `<p>Select your favorite fruit:</p>
  <div>
    {fruits.map((fruit) => (
      <button onClick={() => { setFruit(fruit) }}>
        <span>{fruit.emoji}</span>
      </button>
    ))}
  </div>

<p> Great! <span>{fruit.name} {fruit.emoji}!</span></p>`;

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
  const [fruit, setFruit] = useState<IFruit | null>(null);

  const stateObjectCodeString = `// current state:
  fruit = {
    name: ${fruit?.name}
    emoji: ${fruit?.emoji}
  }`;

  return (
    <div className='h-screen bg-litblue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 border border-yellow-200'>
        <section className='border border-sky-800 p-2'>
          <h3 className='text-xl'>Select your favorite fruit:</h3>
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
          {!!fruit && (
            <p className={`text-2xl`}>
              Great!{' '}
              <span>
                {fruit.name} {fruit.emoji}!
              </span>
            </p>
          )}
        </section>
        <section className='overflow-x-scroll p-2'>
          <div className=''>
            <h2 className='font-mono text-2xl'>useState</h2>
            <div className=''>
              Adds state variable in functional components, without writing a
              class.
            </div>
            <SyntaxHighlighter
              language='jsx'
              style={oneDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {useStateCodeString}
            </SyntaxHighlighter>

            <div className=''>
              Adds state variable in functional components, without writing a
              class.
            </div>

            <SyntaxHighlighter
              language='jsx'
              style={oneDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {stateObjectCodeString}
            </SyntaxHighlighter>
            <SyntaxHighlighter
              language='jsx'
              style={oneDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {FruitComponentCodeString}
            </SyntaxHighlighter>
          </div>
          {/* <h2 className='font-mono text-green-500 '>// useState:</h2>
          <p className='font-mono text-green-500'>
            // adds state variable in functional components (withot writing a
            class)
          </p>
          <p className='font-mono'>const [fruit, setFruit] = useState(null);</p>
          <p className='font-mono text-green-500'>
            // fruit = {JSON.stringify(fruit)}
          </p> */}
        </section>
      </div>
    </div>
  );
};
