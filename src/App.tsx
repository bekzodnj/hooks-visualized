import { useState } from 'react';
import Navbar from './components/common/Navbar';
import { State } from './components/State';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
      <Navbar />
      <State />
    </div>
  );
}

export default App;
