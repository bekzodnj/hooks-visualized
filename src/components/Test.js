useEffect(() => {
  const timerID = setTimeout(() => setHighlightColor(''), 150);

  return () => {
    clearInterval(timerID);
  };
});
