import { useState, useEffect } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeEditor, CodeComment } from './common/CodeEditor';
import {
  effectHookStringsArr,
  emojiToButtonsHtmlString,
  effectHookTimerString,
  fruits,
  subTitleHtmlString,
} from './common/StaticData';

interface IFruit {
  name: string;
  emoji: string;
}

const useStateCodeString = `const [highlightColor, setHighlightColor] = useState('');`;
const setHighlightCodeString = `// set highlightedColor value when button is clicked
{
  fruits.map((fruit) => (
    <button onClick={() => {
        setFruit(fruit);
        setHighlightColor('text-amber-400'); // setting the classname
      }}>
      <span> {fruit.emoji} </span>
    </button>
  ));
}

// ...

// add the classname to the element
<p> 
  Great! <span className={highlightColor}> {fruit.name} {fruit.emoji}! </span>
</p>;
`;
const effectHookCodeString = `
// we are setting the className to the empty value, so the span element goes back to the default styling after a second
useEffect(() => {
  const timerID = setTimeout(() => setHighlightColor(''), 150);

  // and cleaning up the timer in the end
  return () => {
    clearInterval(timerID);
  };
});

`;

const effectHookNotesCodeString = `// only run once after render
useEffect(() => {}, [])

// only run when state variable (e.g. highlightColor) changes
useEffect(() => {}, [highlightColor])
`;

export const Effect = () => {
  const [fruit, setFruit] = useState<IFruit | null>(null);

  const [highlightColor, setHighlightColor] = useState('');

  // useEffect(() => {
  //   const timerID = setTimeout(() => setHighlightColor(''), 1000);

  //   return () => {
  //     clearInterval(timerID);
  //   };
  // });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 '>
      <section className='border border-sky-900 p-2'>
        <h2 className='font-mono text-xl mb-2'>useEffect example</h2>
        <p className='text-lg'>Select your favorite fruit:</p>
        <div className='flex flex-wrap mb-2'>
          {fruits.map((fruit) => (
            <button
              key={fruit.name.toString()}
              className='bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100'
              onClick={() => {
                setFruit(fruit);
                setHighlightColor('bg-green-600 p-1 rounded-md transition');

                setTimeout(() => {
                  setHighlightColor('');
                }, 800);
              }}
            >
              <span className='text-4xl'>{fruit.emoji}</span>
            </button>
          ))}
        </div>
        {fruit ? (
          <p className={`text-xl`}>
            Great!{' '}
            <span className={highlightColor + ' p-1 text-xl transition-colors'}>
              {fruit.name} {fruit.emoji}!
            </span>
          </p>
        ) : (
          <p className={`text-xl`}>...</p>
        )}
      </section>
      <section className='overflow-x-scroll p-2'>
        <h2 className='font-mono text-xl'>useEffect</h2>
        <div className='mb-4'>
          <p>
            Effect hook lets us run addition code after React has updated the
            DOM. Adds side-effects to components - data fetching, setting up a
            subscription, manually changing the DOM, and etc.
          </p>
        </div>
        <div className='border-x-0 border-y border-sky-800 p-3 my-3'>
          <p className=''>
            <span
              className='bg-sky-600 inline-block rounded px-1'
              role='img'
              aria-label='rocket'
            >
              🚀
            </span>{' '}
            To show an example of an effect hook let's add a simple highlight
            animation fruit text.
          </p>
          <p>
            When the fruit button is clicked the fruit name label background
            color should be switched on for a second and turned off after that.
          </p>
          <br />

          <p>Steps: </p>
          <ul className='list-inside list-decimal'>
            <li>
              We will define a className{' '}
              <span className='italic'>(highlightColor)</span> which changes the
              color of the text.
            </li>
            <li>When button is clicked add that class to the text.</li>
            <li>
              Remove the animation class after a second. Because we want to see
              the color change each time when button is clicked.
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <p>Define a new state variable storing the background color</p>
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
          <p>
            When one of the fruit buttons is clicked set the value of
            highlightColor and apply this className to the span element
          </p>
          <SyntaxHighlighter
            language='jsx'
            style={oneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {setHighlightCodeString}
          </SyntaxHighlighter>
        </div>

        <div className='mb-4'>
          <p>
            To be able to highlight the element again, we have to remove the
            classname from the element after a second.{' '}
            <span className='underline underline-offset-4 inline-block'>
              Effect hook lets us run addition code after React has updated the
              DOM.
            </span>
          </p>
          <SyntaxHighlighter
            language='jsx'
            style={oneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {effectHookCodeString}
          </SyntaxHighlighter>
        </div>

        <div className='mb-4'>
          <p>
            <span
              className='bg-sky-600 inline-block rounded px-1'
              role='img'
              aria-label='rocket'
            >
              🚀
            </span>{' '}
            Note
          </p>
          <SyntaxHighlighter
            language='jsx'
            style={oneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {effectHookNotesCodeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};
