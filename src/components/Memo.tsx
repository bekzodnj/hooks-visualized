import { useState, useMemo } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MEMO_CODE_STRING = `const memoizedValue = useMemo(func, dependenciesArr);
`;

const MEMO_EXAMPLE_STRING = `const Memo = () => {
  // fib sequence num
  const [num, setNumber] = useState(20);

  // another state value to produce state change/rerender
  const [isDarkMode, setIsDarkMode] = useState(true);

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = useMemo(() => {
    return fibonacci(num);

    // memozied value will not be recalculated
    // unless num changes
  }, [num]);

  return (
    <>
      <div>
        <span>{isDarkMode ? 'Dark' : 'Light'} mode on</span>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle dark mode
        </button>
      </div>

      <div>
        <h3>
          The value of fibonacci({num}) = {fibValue}
        </h3>

        <button onClick={() => setNumber(num + 1)}>Increment value</button>
      </div>
    </>
  );
};
`;

export const Memo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* INTERACTIVE */}
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='border border-sky-900 p-2'>
          <h2 className='font-mono text-xl'>useMemo</h2>

          <div className='p-2'>
            <label
              htmlFor='checked-toggle'
              className='inline-flex relative items-center cursor-pointer'
            >
              <input
                type='checkbox'
                value=''
                id='checked-toggle'
                className='sr-only peer'
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

              <h3 className='ml-3 font-medium text-gray-300'>
                useMemo {checked ? 'enabled' : 'disabled'}
              </h3>
            </label>

            {checked ? <WithMemo /> : <WithoutMemo />}
          </div>
        </section>

        {/* Tutorial */}
        <section className='p-2'>
          {/* header-intro */}
          <h2 className='font-mono text-xl'>useMemo</h2>

          <div className='mb-4'>
            <p>
              useMemo will memoize the value of expensive function calls. So
              that it helps to avoid expensive calculations on every render.
            </p>
            <SyntaxHighlighter language='jsx' style={oneDark}>
              {MEMO_CODE_STRING}
            </SyntaxHighlighter>
          </div>

          <div className='mb-4'>
            <p>
              Below is an example of how to use memoize the Fibonacci value. So
              that it doesn't recalculated each time during rerender/state
              changes (e.g. color theme toggle).
            </p>
            <SyntaxHighlighter language='jsx' style={oneDark}>
              {MEMO_EXAMPLE_STRING}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </>
  );
};

const WithMemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [num, setNumber] = useState(28);

  const fibonacci = (n: number): number => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = useMemo(() => {
    return fibonacci(num);
  }, [num]);

  const activeDivClass = isDarkMode
    ? 'bg-slate-900 text-white'
    : 'bg-yellow-50 text-black';

  const activeBtnClass = isDarkMode
    ? 'bg-blue-900 active:bg-blue-700'
    : 'bg-sky-500 active:bg-sky-700';

  const activeInfoTextClass = isDarkMode
    ? 'bg-slate-900 text-gray-400'
    : 'bg-yellow-50 text-gray-700';

  const activeEmoji = isDarkMode ? '🌙' : '🌤️';

  return (
    <div className={`p-2 ` + activeDivClass}>
      <p className={'font-normal mb-5 ' + activeInfoTextClass}>
        <span role='img' aria-label='gem'>
          💡
        </span>{' '}
        useMemo enabled - the theme toggle does not cause the recalculation of
        the fib value.
      </p>
      <div className='space-x-2 mb-4'>
        <span>{isDarkMode ? 'Dark' : 'Light'} mode on</span>
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

      <div>
        <h3 className='text-lg font-mono'>
          The value of fibonacci({num}) = {fibValue}
        </h3>

        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
          onClick={() => setNumber(num + 1)}
        >
          Increment value
        </button>
      </div>
    </div>
  );
};

const WithoutMemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [num, setNumber] = useState(28);

  const fibonacci = (n: number): number => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = (() => {
    return fibonacci(num);
  })();

  const activeDivClass = isDarkMode
    ? 'bg-slate-900 text-white'
    : 'bg-yellow-50 text-black';

  const activeInfoTextClass = isDarkMode
    ? 'bg-slate-900 text-gray-400'
    : 'bg-yellow-50 text-gray-700';

  const activeBtnClass = isDarkMode
    ? 'bg-blue-900 active:bg-blue-700'
    : 'bg-sky-500 active:bg-sky-700';

  const activeEmoji = isDarkMode ? '🌙' : '🌤️';

  return (
    <div className={`p-2 ` + activeDivClass}>
      <p className={'font-normal mb-5 ' + activeInfoTextClass}>
        <span role='img' aria-label='gem'>
          💡
        </span>
        useMemo disabled - if the num value is big enough, the theme toggling
        also causes the lag. Because without memoization, the value will be
        recalculated on each render.
      </p>
      <div className='space-x-2 mb-4'>
        <span>{isDarkMode ? 'Dark' : 'Light'} mode on</span>
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

      <div>
        <h3 className='text-lg font-mono'>
          The value of fibonacci({num}) = {fibValue}
        </h3>

        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
          onClick={() => setNumber(num + 1)}
        >
          Increment value
        </button>
      </div>
    </div>
  );
};
