import { useState } from 'react';
import Navbar from './components/common/Navbar';
import { State } from './components/State';
import { Effect } from './components/Effect';
import { Context } from './components/Context';
import { Ref } from './components/Ref';
import { AboutPage } from './components/common/AboutPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<AboutPage />} />
            <Route path='/state' element={<State />} />
            <Route path='/effect' element={<Effect />} />
            <Route path='/context' element={<Context />} />
            <Route path='/ref' element={<Ref />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
