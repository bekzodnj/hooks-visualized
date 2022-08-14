export const Ref = () => {
  const textAreaRef = useRef(null);

  return (
    <>
      <button onClick={() => textAreaRef.current?.focus()}>
        Focus on the text area
      </button>

      <button onClick={() => textAreaRef.current?.blur()}>
        Unfocus the text area
      </button>

      <textarea ref={textAreaRef}></textarea>
    </>
  );
};
