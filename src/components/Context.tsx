import { useState, useEffect, createContext, useContext } from 'react';
import { CodeEditor, CodeComment } from './common/CodeEditor';
import { fruits } from './common/StaticData';

interface ILanguageContext {
  languageCode: string;
  setLanguageCode?: (fruit: string) => void;
}

const LanguageContext = createContext<ILanguageContext>({
  languageCode: '',
  setLanguageCode: function (fruit) {
    return fruit;
  },
});

const _fruits = [fruits[4], fruits[1], fruits[3]];

const languagesArr = [
  {
    langCode: 'en',
    langValue: 'English',
    fruitName: 'This is a lemon.',
    emoji: '🇬🇧',
    promptText: 'Select the language',
  },
  {
    langCode: 'de',
    langValue: 'Deutsch',
    fruitName: 'Das ist eine Zitrone.',
    emoji: '🇩🇪',
    promptText: 'Wählen Sie die Sprache aus',
  },
  {
    langCode: 'es',
    langValue: 'Español',
    fruitName: 'Esto es un limon.',
    emoji: '🇪🇸',
    promptText: 'Seleccione el idioma',
  },
];

export const Context = () => {
  return (
    <div className='h-full bg-darknightblue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <section className='border border-sky-900 p-2'>
          {/* Interactive */}
          <h2 className='font-mono text-xl mb-2'>useContext example</h2>
          <LevelOne />
        </section>

        {/* Tutorial */}
        <section>hi</section>
      </div>
    </div>
  );
};

const LevelOne = () => {
  const [languageCode, setLanguageCode] = useState('en');

  const selectedLangObj = languagesArr.find(
    (lang) => lang.langCode === languageCode
  );

  return (
    <LanguageContext.Provider value={{ languageCode, setLanguageCode }}>
      <div className='border border-yellow-400 inline-block p-3 rounded w-full sm:w-1/2'>
        <p className='text-lg '>
          <span role='img' aria-label='lemon' className=''>
            ⚙️
          </span>
          <span>{selectedLangObj?.promptText}</span>
        </p>

        <div className='mb-7 flex flex-col'>
          {languagesArr.map((lang) => {
            return (
              <label key={lang.langCode}>
                <input
                  type='radio'
                  name='fruitName'
                  value={lang.langCode}
                  checked={languageCode === lang.langCode}
                  onChange={() => setLanguageCode(lang.langCode)}
                  className='mr-1 w-6 h-6'
                />
                <span className='text-2xl' role='img' aria-label='watermelon'>
                  {lang.emoji}
                </span>
                <span> {lang.langValue}</span>
              </label>
            );
          })}
        </div>
        <p>Level One</p>
        <LevelTwo />
      </div>
    </LanguageContext.Provider>
  );
};

const LevelTwo = () => {
  return (
    <div className='border border-lime-400 p-3 rounded'>
      <p>Level Two</p>
      <div className='border border-emerald-400 h-52 p-3 rounded'>
        <p className='mb-3'>Level Three</p>
        <LevelThree />
      </div>
    </div>
  );
};

const LevelThree = () => {
  const { languageCode } = useContext(LanguageContext);

  const selectedLangObj = languagesArr.find(
    (lang) => lang.langCode === languageCode
  );

  return (
    <div>
      <div className='flex flex-col'>
        <p className='text-lg'>
          <span className='text-3xl' role='img' aria-label='watermelon'>
            🍋
          </span>
          {selectedLangObj?.fruitName}
        </p>
      </div>
    </div>
  );
};
