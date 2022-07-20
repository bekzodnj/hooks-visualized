import { useState, useRef, MutableRefObject } from 'react';
import { CodeEditor, CodeComment } from './common/CodeEditor';
import { fruits } from './common/StaticData';

export const Ref = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className='bg-litblue text-white h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='p-2'>
          <h2 className='text-2xl'>useRef</h2>
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
        <section>Ref</section>
      </div>
    </div>
  );
};
