import { useState, useCallback, useEffect, memo } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CALLBACK_DEF_CODE_STRING = `const fibonacci = (n) => {
  // ...
};

// memoized callback function
const fibonacciCallback = useCallback(fibonacci, [num]);
`;

const CALLBACK_EXAMPLE_CODE_STRING = `const ParentComponent = () => {
  const [num, setNumber] = useState(28);

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibonacciCallback = useCallback(fibonacci, [num]);
  return (
    <>
      <button onClick={() => setNumber(num + 1)}>
        Increment fibonacci value
      </button>

      {/* // sending the number and memozied function to a child */}
      <FibonacciComponent fibonacci={fibonacciCallback} num={num} />
    </>
  );
};

// React.memo skips rendering if props are the same
const FibonacciComponent = memo(({ fibonacci, num }) => {
  return (
    <>
      <h3>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
    </>
  );
});`;

export const Callback = ({}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* INTERACTIVE */}
      <section className='border border-sky-800 p-2'>
        <h2 className='font-mono text-xl'>useCallback</h2>
        <div className={`p-1`}>
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

      {/* TUTORIAL */}
      <section className='overflow-x-scroll p-2'>
        <h2 className='font-mono text-xl'>useCallback</h2>
        <div className='mb-4'>
          <p>
            useCallback hook returns a memoized callback function. Unless
            dependency values change, useCallback returns the same function
            instance between renderings.
          </p>

          <SyntaxHighlighter language='jsx' style={oneDark}>
            {CALLBACK_DEF_CODE_STRING}
          </SyntaxHighlighter>
        </div>
        <p className='mb-4'>
          This is useful when doing the component's props check to skip
          rendering (aka React.memo). Because every time a component re-renders,
          its functions get recreated. useCallback ensures that the function
          instance will be the same ("referential equality").
        </p>

        <div className='mb-4'>
          <p>
            Below is an example of how to use memoize the Fibonacci function. So
            that it doesn't re-created each time when parent's state changes.
            Also shows how to skip re-render of child component using
            React.memo().
          </p>
          <SyntaxHighlighter language='jsx' style={oneDark}>
            {CALLBACK_EXAMPLE_CODE_STRING}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

const WithCallback = ({ checked }: { checked: boolean }) => {
  const [num, setNumber] = useState(28);
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

  const infoDescriptionBox = checked ? (
    <p className={'font-normal mb-5 text-gray-400'}>
      <span role='img' aria-label='bulb'>
        💡
      </span>{' '}
      useCallback enabled - parent sends memoized function instance of
      fibonacci(). So child doesn't re-render when receiving the same props.
    </p>
  ) : (
    <p className={'font-normal mb-5 text-gray-400'}>
      <span role='img' aria-label='bulb'>
        💡
      </span>{' '}
      useCallback disabled - each second parent component gets re-rendered, and
      new function instance (fibonacci) is being sent as props to child
      component. In turn child also re-renders due to different props and
      calculates the fibonacci() each time.
    </p>
  );

  return (
    <div className={`bg-slate-900 text-white p-2`}>
      {infoDescriptionBox}
      <p className='mb-3'>
        {' '}
        Parent component rendered at: {time.toLocaleTimeString()}
      </p>
      <button
        className='block font-mono text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
        onClick={() => setNumber(num + 1)}
      >
        Increment fibonacci value
      </button>
      {checked ? (
        <WithUseCallback fibonacci={fibonacciCallback} num={num} />
      ) : (
        <WithoutUseCallback fibonacci={fibonacciCallback} num={num} />
      )}
    </div>
  );
};

interface ICallbackComponentProps {
  fibonacci: (num: number) => number;
  num: number;
}

const WithUseCallback = memo(({ fibonacci, num }: ICallbackComponentProps) => {
  return (
    <div className='border border-blue-900'>
      <h3 className='font-mono'>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
      <span className='inline-block italic text-gray-300'>
        Child component last re-rendered at: {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
});

const WithoutUseCallback = ({ fibonacci, num }: ICallbackComponentProps) => {
  return (
    <div className='border border-blue-900'>
      <h3 className='font-mono'>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
      <span className='inline-block italic text-gray-300'>
        Child component last re-rendered at: {new Date().toLocaleTimeString()}
      </span>
    </div>
  );
};
