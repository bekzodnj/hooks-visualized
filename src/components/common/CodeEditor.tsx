export const CodeEditor = ({ children }) => {
  return (
    <div className='bg-stone-900 p-1 font-mono whitespace-pre-wrap'>
      {children}
    </div>
  );
};

export const CodeComment = ({ children }) => {
  return (
    <p className='font-mono text-green-500 whitespace-pre-wrap'>{children}</p>
  );
};
