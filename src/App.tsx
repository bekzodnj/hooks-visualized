import { useState } from 'react';
import Navbar from './components/common/Navbar';
import { State } from './components/State';
import { Effect } from './components/Effect';
import { Context } from './components/Context';
import { Ref } from './components/Ref';
import { Reducer } from './components/Reducer';
import { Memo } from './components/Memo';
import { Callback } from './components/Callback';
import { AboutPage } from './components/common/AboutPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='min-h-screen bg-darknightblue text-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<AboutPage />} />
            <Route path='/state' element={<State />} />
            <Route path='/effect' element={<Effect />} />
            <Route path='/context' element={<Context />} />
            <Route path='/ref' element={<Ref />} />
            <Route path='/reducer' element={<Reducer />} />
            <Route path='/memo' element={<Memo />} />
            <Route path='/callback' element={<Callback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
