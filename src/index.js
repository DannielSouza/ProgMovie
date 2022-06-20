import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Components/Details';
import Head from './Components/Head';
import Latest from './Components/Latest';
import Genre from './Components/Genre';
/* import Footer from './Components/Footer'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Head/>
    <div className='content'>
    <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/details/:id' element={ <Details/>} />
    <Route path='/latest' element={<Latest/>} />
    <Route path='/genre/:id/:name' element={<Genre/>} />
    </Routes>
    </div>
  </BrowserRouter>
);
