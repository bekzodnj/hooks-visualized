export const Fruit = () => {
  const [fruit, setFruit] = useState(null);
  return (
    <section className=''>
      <p className=''>Select your favorite fruit:</p>
      <div>
        {fruits.map((fruit) => (
          <button
            onClick={() => {
              setFruit(fruit);
            }}
          >
            <span>{fruit.emoji}</span>
          </button>
        ))}
      </div>

      <p>
        {' '}
        Great!{' '}
        <span>
          {fruit.name} {fruit.emoji}!
        </span>
      </p>
    </section>
  );
};
