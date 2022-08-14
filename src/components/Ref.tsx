import { useState, useRef } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStateCodeString = `const myRef = useRef(initialValue);

// refs are updated either inside a useEffect() or inside handlers
const handler = () => {
  // get reference value
  const currentValue = myRef.current;
  
  //...
  // set a new reference value
  myRef.current = newValue; 
};`;

const useRefExampleCodeString = `
 const Ref = () => {
  const textAreaRef = useRef(null);

  return (
    <>
      <button onClick={() => textAreaRef.current?.focus()}>
        Focus on the text area
      </button>

      <button onClick={() => textAreaRef.current?.blur()}>
        Unfocus the text area
      </button>

      <textarea ref={textAreaRef}></textarea>
    </>
  );
};
`;

export const Ref = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
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
      <section className='p-2'>
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

        <div className='mb-4'>
          <p>
            <span
              className='bg-sky-600 inline-block rounded px-1'
              role='img'
              aria-label='rocket'
            >
              🚀
            </span>{' '}
            Example. Accessing the DOM using ref (focusing and blurring the HTML
            element).
          </p>

          <SyntaxHighlighter
            language='jsx'
            style={oneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {useRefExampleCodeString}
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
            Note.
            <ul className='list-inside list-decimal'>
              <li>
                Updating a ref value doesn't trigger re-rendering while setting
                a new state value makes the component re-render; The reference
                update is synchronous.
              </li>
              <li>
                The updated ref value is available right away, while the state
                update is asynchronous (the state is updated after
                re-rendering).
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};
