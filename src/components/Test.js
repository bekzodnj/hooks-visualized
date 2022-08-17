const initialState = { count: 50 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COIN':
      return { count: state.count + 10 };
    case 'DECREMENT_COIN':
      return { count: state.count - 10 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p> {state.count} / 100 🪙</p>
      <button onClick={() => dispatch({ type: 'DECREMENT_COIN' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_COIN' })}>+</button>
    </>
  );
}
