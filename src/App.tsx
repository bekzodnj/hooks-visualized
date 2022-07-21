import { useState } from 'react';
import Navbar from './components/common/Navbar';
import { State } from './components/State';
import { Effect } from './components/Effect';
import { Context } from './components/Context';
import { Ref } from './components/Ref';
import { Reducer } from './components/Reducer';
import { AboutPage } from './components/common/AboutPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
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
            <Route path='/reducer' element={<Reducer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
