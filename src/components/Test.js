const handler = () => {
  const currentValue = myRef.current; // get reference value:
  //...
  myRef.current = newValue; // set a new reference value
};
