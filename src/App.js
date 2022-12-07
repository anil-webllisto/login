import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Features from './Component/Features';
import Page404 from './Component/Page404';
import HigherOrder from './HigherOrder';
import Products from './Component/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:id' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/features' element={<Features />} />
          {/* <Route path='/*' element={<Navigate to='/' />} /> */}
          <Route path='/higherOrder' element={<HigherOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
