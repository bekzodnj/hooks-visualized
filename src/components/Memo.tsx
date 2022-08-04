import { useState, useMemo } from 'react';

export const Memo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='h-screen bg-darknightblue text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <section className='border border-sky-800 p-2'>
            <h2 className='text-2xl'>useMemo</h2>

            <div className={`border border-sky-400 p-2 transition-colors `}>
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
          <section className='overflow-x-scroll p-2'>
            memo info
            <p>
              This optimization helps to avoid expensive calculations on every
              render.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

const WithMemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [num, setNumber] = useState(20);

  const [time, setTime] = useState(new Date());

  const fibonacci = (n: number): number => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = useMemo(() => {
    setTime(new Date());
    return fibonacci(num);
  }, [num]);

  //const fibValue = fibonacci(num);

  const activeDivClass = isDarkMode
    ? 'bg-slate-900 text-white'
    : 'bg-yellow-50 text-black';

  const activeBtnClass = isDarkMode
    ? 'bg-blue-900 active:bg-blue-700'
    : 'bg-sky-500 active:bg-sky-700';

  const activeEmoji = isDarkMode ? '🌙' : '🌤️';

  console.log(fibValue);
  return (
    <div className={`border transition-colors ` + activeDivClass}>
      <div className='space-x-2 mb-4'>
        <span>{isDarkMode ? 'Light' : 'Dark'} mode</span>
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
        <h3 className='text-xl'>
          The value of fibonacci({num}) = {fibValue}
        </h3>
        <span className='inline-block text-sm italic'>
          Last computed at: {time.toLocaleTimeString()}
        </span>

        <button
          className='block bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100 text-black'
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
  const [num, setNumber] = useState(20);

  const [time, setTime] = useState(new Date());

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

  const activeBtnClass = isDarkMode
    ? 'bg-blue-900 active:bg-blue-700'
    : 'bg-sky-500 active:bg-sky-700';

  const activeEmoji = isDarkMode ? '🌙' : '🌤️';

  console.log(fibValue);
  return (
    <div className={`border transition-colors ` + activeDivClass}>
      <div className='space-x-2 mb-4'>
        <span>{isDarkMode ? 'Light' : 'Dark'} mode</span>
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
        <h3 className='text-xl'>
          The value of fibonacci({num}) = {fibValue}
        </h3>

        <button
          className='block bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100 text-black'
          onClick={() => {
            setNumber(num + 1);
          }}
        >
          Increment value
        </button>
      </div>
    </div>
  );
};
