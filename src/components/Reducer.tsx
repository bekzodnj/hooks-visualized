import { useState, useRef, useReducer } from 'react';
import { CodeEditor, CodeComment } from './common/CodeEditor';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

const AWARD_EMOJIS = ['🚀', '🎉', '✨', '✨', '💎', '💯', '🪐'];

type StateType = {
  gemCount: number;
  coinCount: number;
  starCount: number;
};

const initialState: StateType = {
  gemCount: 80,
  coinCount: 70,
  starCount: 60,
};

enum ActionKind {
  INCREASE_GEM = 'INCREASE_GEM',
  DECREASE_GEM = 'DECREASE_GEM',
  INCREASE_COIN = 'INCREASE_COIN',
  DECREASE_COIN = 'DECREASE_COIN',
  INCREASE_STAR = 'INCREASE_STAR',
  DECREASE_STAR = 'DECREASE_STAR',
}

type ActionType = {
  type: ActionKind;
};

const limitTheNum = (num: number) => (num < 0 ? 0 : num > 100 ? 100 : num);

const STEP = 10;
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionKind.INCREASE_GEM:
      return {
        ...state,
        gemCount: limitTheNum(state.gemCount + STEP),
      };

    case ActionKind.DECREASE_GEM:
      return {
        ...state,
        gemCount: limitTheNum(state.gemCount - STEP),
      };

    case ActionKind.INCREASE_COIN:
      return {
        ...state,
        coinCount: limitTheNum(state.coinCount + STEP),
      };

    case ActionKind.DECREASE_COIN:
      return {
        ...state,
        coinCount: limitTheNum(state.coinCount - STEP),
      };

    case ActionKind.INCREASE_STAR:
      return {
        ...state,
        starCount: limitTheNum(state.starCount + STEP),
      };

    case ActionKind.DECREASE_STAR:
      return {
        ...state,
        starCount: limitTheNum(state.starCount - STEP),
      };
  }
};

export const Reducer = () => {
  const [{ gemCount, coinCount, starCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const isEachItemEqualHundred = [gemCount, coinCount, starCount].every(
    (item) => item === 100
  );

  let emojis = AWARD_EMOJIS.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <section className='p-2'>
        <h2 className='text-2xl '>useReducer </h2>

        <div
          className={
            'mb-1 border-2 flex justify-between items-center ' +
            (isEachItemEqualHundred && 'border-2 border-sky-400')
          }
        >
          <div className={'p-2  '}>
            <p
              className={
                'text-2xl ' + (gemCount === 100 && 'text-sky-400 font-semibold')
              }
            >
              {gemCount} / 100
              <span
                className='text-4xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </p>
            <p
              className={
                'text-2xl ' +
                (coinCount === 100 && 'text-orange-400 font-semibold')
              }
            >
              {coinCount} / 100
              <span
                className='text-4xl inline-block p-2'
                role='img'
                aria-label='coin'
              >
                🪙
              </span>
            </p>

            <p
              className={
                'text-2xl ' +
                (starCount === 100 && 'text-yellow-400 font-semibold')
              }
            >
              {starCount} / 100
              <span
                className='text-4xl inline-block p-2'
                role='img'
                aria-label='watermelon'
              >
                ⭐
              </span>
            </p>
          </div>
          {isEachItemEqualHundred && (
            <p className='text-3xl'>{emojis.join(' ')}</p>
          )}

          <div></div>
        </div>
        <div>
          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_GEM })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_GEM })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </button>
          </div>

          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_COIN })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                🪙
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_COIN })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                🪙
              </span>
            </button>
          </div>

          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_STAR })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                ⭐
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_STAR })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                ⭐
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tutorial */}
      <section className='p-2'>
        Ref
        <SyntaxHighlighter language='jsx' style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </section>
    </div>
  );
};
