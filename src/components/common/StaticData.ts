export const fruits = [
  {
    name: 'Tangerine',
    emoji: '🍊',
  },
  {
    name: 'Pineapple',
    emoji: '🍍',
  },
  {
    name: 'Lemon',
    emoji: '🍋',
  },
  {
    name: 'Watermelon',
    emoji: '🍉',
  },
  {
    name: 'Banana',
    emoji: '🍌',
  },
  {
    name: 'Apple',
    emoji: '🍎',
  },
];

export const emojiToButtonsHtmlString = [
  `{fruits.map((fruit) => (
      <button
        onClick={() => {
          setFruit(fruit);`,
  `        setHighlightColor('text-amber-400')`,
  `    }}>
        <span className='...'>{fruit.emoji}</span>
      </button> ))}       
      `,
];

export const subTitleHtmlString = [
  `<p>
      Great! 
      <span `,
  `className={highlightColor}`,
  `>{fruit.name} {fruit.emoji}!
      </span>
    </p>`,
];

export const effectHookTimerString = `useEffect(() => {
      const timerID = setTimeout(() => setHighlightColor(''), 150);
  
      return () => {
        clearInterval(timerID);
      };
  });
  `;

export const effectHookStringsArr = [
  `useEffect(() => {}, [])`,
  `useEffect(() => {}, [highlightColor])`,
];
