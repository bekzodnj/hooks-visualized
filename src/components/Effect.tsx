import { useState, useEffect } from 'react';
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

export const Effect = () => {
  const [fruit, setFruit] = useState<IFruit | null>(null);

  const [highlightColor, setHighlightColor] = useState('');

  useEffect(() => {
    const timerID = setTimeout(() => setHighlightColor(''), 150);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div className=' bg-litblue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <section className='border '>
          <p className='text-lg'>Select your favorite fruit:</p>
          <div className='flex flex-wrap mb-2'>
            {fruits.map((fruit) => (
              <button
                key={fruit.name.toString()}
                className='bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100'
                onClick={() => {
                  setFruit(fruit);
                  setHighlightColor('text-amber-400 transition');
                }}
              >
                <span className='text-4xl'>{fruit.emoji}</span>
              </button>
            ))}
          </div>
          {!!fruit && (
            <p className={`text-2xl`}>
              Great!{' '}
              <span className={highlightColor}>
                {fruit.name} {fruit.emoji}!
              </span>
            </p>
          )}
        </section>
        <section className='overflow-x-scroll'>
          <CodeEditor>
            <CodeComment>// useEffect</CodeComment>
            <CodeComment>
              // e.g. data fetching, setting up a subscription, manually
              changing the DOM, and etc.
            </CodeComment>
          </CodeEditor>
          <div className='border border-sky-600 p-2'>
            <div className='m-0 antialiased px-3 pt-4 text-base'>
              <span
                className='bg-sky-600 inline-block rounded px-1'
                role='img'
                aria-label='rocket'
              >
                🚀
              </span>{' '}
              To show an example of effect hook let's add a simple animation to
              the fruit buttons. When the button is clicked the fruit name text
              color should be toggled.
              <br />
              <br />
              <ul className='list-inside list-decimal'>
                <li>
                  {' '}
                  We will define a classname which changes the color of the
                  text.
                </li>
                <li>When button is clicked add that class to the text.</li>
                <li>
                  Remove the animation class after a few milliseconds. Because
                  we want to see the animation each time when button is clicked.
                </li>
              </ul>
            </div>
          </div>
          <CodeEditor>
            <CodeComment>// 1. define the classname</CodeComment>
            <p className='font-mono bg-emerald-900'>
              const [highlightColor, setHighlightColor] = useState('');
            </p>
          </CodeEditor>
          <CodeEditor>
            <CodeComment>
              // 2. set highlightedColor value when button is clicked
            </CodeComment>
            <div className='whitespace-pre-wrap'>
              {emojiToButtonsHtmlString[0]}
              <p className='bg-emerald-900'>{emojiToButtonsHtmlString[1]}</p>
              {emojiToButtonsHtmlString[2]}
            </div>
          </CodeEditor>
          <CodeEditor>
            <CodeComment>// 3. apply the classname to the element</CodeComment>
            <p>
              {subTitleHtmlString[0]}
              <span className='bg-emerald-900'>{subTitleHtmlString[1]}</span>
              {subTitleHtmlString[2]}
            </p>
          </CodeEditor>

          <div className='border border-sky-600 p-2'>
            <p className='m-0 antialiased px-3 pt-4 text-base'>
              <span
                className='bg-sky-600 inline-block rounded px-1'
                role='img'
                aria-label='rocket'
              >
                🚀
              </span>{' '}
              In order to able to toggle the class again, we have to remove the
              classname after a few milliseconds.{' '}
              <span className='underline underline-offset-4'>
                Effect hook lets us run addition code after React has updated
                the DOM.
              </span>
            </p>
          </div>

          <CodeEditor>
            <CodeComment>
              // here we are setting the className to the empty value almost
              immadiately
            </CodeComment>
            <CodeComment>// and cleaning up the timer in the end</CodeComment>

            {effectHookTimerString}
          </CodeEditor>

          <div className='border border-sky-600 p-2'>
            <p className='m-0 antialiased px-3 pt-4 text-base'>
              <span
                className='bg-sky-600 inline-block rounded px-1'
                role='img'
                aria-label='rocket'
              >
                🚀
              </span>{' '}
              Note
            </p>
          </div>
          <CodeEditor>
            <CodeComment>only run once after render</CodeComment>
            {effectHookStringsArr[0]}
            <br />
            <br />
            <CodeComment>
              only run when state variable (e.g. highlightColor) changes
            </CodeComment>
            {effectHookStringsArr[1]}
          </CodeEditor>
        </section>
      </div>
    </div>
  );
};
