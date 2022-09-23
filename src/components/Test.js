const Memo = () => {
  // fib sequence num
  const [num, setNumber] = useState(20);

  // another state value to produce state change/rerender
  const [isDarkMode, setIsDarkMode] = useState(true);

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const fibValue = useMemo(() => {
    return fibonacci(num);

    // memozied value will not be recalculated
    // unless num changes
  }, [num]);

  return (
    <>
      <div>
        <span>{isDarkMode ? 'Dark' : 'Light'} mode on</span>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle dark mode
        </button>
      </div>

      <div>
        <h3>
          The value of fibonacci({num}) = {fibValue}
        </h3>

        <button onClick={() => setNumber(num + 1)}>Increment value</button>
      </div>
    </>
  );
};
