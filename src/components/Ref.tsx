import { useState, useRef } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStateCodeString = `const myRef = useRef(initialValue);

// refs are updated either inside a useEffect() or inside handlers
const handler = () => {
  const currentValue = myRef.current; // get reference value:
  //...
  myRef.current = newValue; // set a new reference value
};`;

export const Ref = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className='bg-darknightblue text-white h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* Interactive */}
        <section className='border border-sky-900 p-2'>
          <h2 className='font-mono text-xl'>useRef</h2>
          <div>
            <button
              type='button'
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
               hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
             dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:opacity-90'
              onClick={() => textAreaRef.current?.focus()}
            >
              Focus on the text area
            </button>

            <button
              type='button'
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:opacity-90'
              onClick={() => textAreaRef.current?.blur()}
            >
              Unfocus the text area
            </button>
          </div>
          <label htmlFor='textArea'>
            <textarea
              className='text-black focus:ring-blue-300 focus:ring-2'
              name='textArea'
              cols={30}
              rows={2}
              ref={textAreaRef}
            ></textarea>
          </label>
        </section>

        {/* Tutorial */}
        <section>
          <h2 className='font-mono text-xl'>useRef</h2>
          <div className='mb-4'>
            <p>
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument (initialValue). It is used for
              persistent mutable values and DOM elements.
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
        </section>
      </div>
    </div>
  );
};
