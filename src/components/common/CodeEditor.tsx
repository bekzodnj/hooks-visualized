export const CodeEditor = ({ children, className }) => {
  return (
    <div
      className={`bg-stone-900 p-1 font-mono whitespace-pre-wrap` + className}
    >
      {children}
    </div>
  );
};

export const CodeComment = ({ children }) => {
  return (
    <p className='font-mono text-green-500 whitespace-pre-wrap'>{children}</p>
  );
};
