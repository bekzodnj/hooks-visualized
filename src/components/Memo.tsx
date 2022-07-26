import { useState, useMemo } from 'react';

export const Memo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const activeDivClass = isDarkMode
    ? 'bg-slate-900 text-white'
    : 'bg-yellow-50 text-black';

  const activeBtnClass = isDarkMode
    ? 'bg-blue-900 active:bg-blue-700'
    : 'bg-sky-500 active:bg-sky-700';

  const activeEmoji = isDarkMode ? '🌙' : '🌤️';

  return (
    <div className='h-screen bg-litblue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='border border-sky-800 p-2'>
          <h2 className='text-2xl'>useMemo</h2>

          <div
            className={
              `border border-sky-400 p-2 transition-colors ` + activeDivClass
            }
          >
            <div className='space-x-2'>
              <span>Dark Mode: {isDarkMode ? 'On' : 'Off'}</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={
                  `p-2 transition-colors shadow-md rounded ` + activeBtnClass
                }
              >
                <span
                  className='text-2xl inline-block p-2'
                  role='img'
                  aria-label='gem'
                >
                  {activeEmoji}
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className='overflow-x-scroll p-2'>
          memo info
          <p>
            This optimization helps to avoid expensive calculations on every
            render.
          </p>
        </section>
      </div>
    </div>
  );
};
