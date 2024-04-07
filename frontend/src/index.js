import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SearchProducts from './SearchProducts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='products' element={<Products/>}/>
  <Route path='aboutus' element={<AboutUs/>}/>
  <Route path='contactus' element={<ContactUs/>}/>
  <Route path='/search/:searchTerm' element={ <SearchProducts/>} />


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

