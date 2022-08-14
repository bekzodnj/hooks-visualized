import { useState, useCallback, useEffect, memo } from 'react';

export const Callback = ({}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className=''>
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
                useCallback {checked ? 'enabled' : 'disabled'}
              </h3>
            </label>

            <WithCallback checked={checked} />
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

const WithCallback = ({ checked }: { checked: boolean }) => {
  const [num, setNumber] = useState(20);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerId = setTimeout(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const fibonacci = (n: number): number => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibonacciCallback = useCallback(fibonacci, [num]);

  return (
    <div className={`border transition-colors bg-slate-900 text-white`}>
      <div className='mb-4'></div>

      <div>
        Parent component rendered at: {time.toLocaleTimeString()}
        <button
          className='block bg-gray-100 p-2 m-1 shadow-md rounded active:bg-orange-100 text-black'
          onClick={() => setNumber(num + 1)}
        >
          Increment value
        </button>
        {checked ? (
          <WithUseCallback fibonacci={fibonacciCallback} num={num} />
        ) : (
          <WithoutUseCallback fibonacci={fibonacciCallback} num={num} />
        )}
      </div>
    </div>
  );
};

interface ICallbackComponentProps {
  fibonacci: (num: number) => number;
  num: number;
}

const WithUseCallback = memo(({ fibonacci, num }: ICallbackComponentProps) => {
  return (
    <div>
      <h3 className='text-xl'>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
      <span className='inline-block italic'>
        Last re-render at: {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
});

const WithoutUseCallback = ({ fibonacci, num }: ICallbackComponentProps) => {
  return (
    <div>
      <h3 className='text-xl'>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
      <span className='inline-block italic'>
        Last re-render at: {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
};
