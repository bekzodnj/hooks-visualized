const ParentComponent = () => {
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
const WithUseCallback = memo(({ fibonacci, num }) => {
  return (
    <>
      <h3>
        The value of fibonacci({num}) = {fibonacci(num)}
      </h3>
    </>
  );
});
