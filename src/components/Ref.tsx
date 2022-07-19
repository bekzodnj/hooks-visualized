import { useState, useEffect, createContext, useContext } from 'react';
import { CodeEditor, CodeComment } from './common/CodeEditor';
import { fruits } from './common/StaticData';

interface IFruitContext {
  fruitName: string;
  setFruitName?: (fruit: string) => void;
}

const FruitContext = createContext<IFruitContext>({
  fruitName: 'Lemon',
  setFruitName: function (fruit) {
    return fruit;
  },
});

const _fruits = [fruits[4], fruits[1], fruits[3]];

export const Context = () => {
  return (
    <div className='bg-litblue text-white h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='p-2'>{/* Interactive */}</section>

        {/* Tutorial */}
        <section>hi</section>
      </div>
    </div>
  );
};
