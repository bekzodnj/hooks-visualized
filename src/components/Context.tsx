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
    <div className='bg-darknightblue text-white h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='p-2'>
          {/* Interactive */}
          <LevelOne />
        </section>

        {/* Tutorial */}
        <section>hi</section>
      </div>
    </div>
  );
};

const LevelOne = () => {
  const [fruitName, setFruitName] = useState('Lemon');

  return (
    <FruitContext.Provider value={{ fruitName, setFruitName }}>
      <div className='border border-yellow-400 inline-block p-3 rounded'>
        <p className='text-3xl mb-4'>
          <span role='img' aria-label='lemon' className=''>
            ✨
          </span>
          <span className=''>{fruitName} Inc</span>
        </p>
        <p>Level One</p>

        <LevelTwo />
      </div>
    </FruitContext.Provider>
  );
};

const LevelTwo = () => {
  return (
    <div className='border border-lime-400 p-3 rounded'>
      <p>Level Two</p>
      <div className='border border-emerald-400 w-80 h-80 p-3 rounded'>
        <p className='mb-3'>Level Three</p>
        <LevelThree />
      </div>
    </div>
  );
};

const LevelThree = () => {
  const { fruitName, setFruitName } = useContext(FruitContext);

  return (
    <div>
      <div className='flex flex-col'>
        <p className='italic'>Change header title:</p>
        {_fruits.map((fruit) => {
          if (fruitName && setFruitName) {
            return (
              <label key={fruit.name}>
                <input
                  type='radio'
                  name='fruitName'
                  value={fruit.name}
                  checked={fruitName === fruit.name}
                  onChange={() => setFruitName(fruit.name)}
                />
                <span className='text-2xl' role='img' aria-label='watermelon'>
                  {fruit.emoji}
                </span>
                <span> {fruit.name}</span>
              </label>
            );
          }
        })}
      </div>
    </div>
  );
};
