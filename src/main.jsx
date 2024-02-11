// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App.jsx'
// import './index.css'
// import RootLayout from './components/RootLayout'
// import Dashboard from './components/Dashboard'
// import Cart from './components/Cart';

// const router=createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<RootLayout/>}>
//     <Route index element={<Dashboard/>}/>
//     <Route path="/cart" element={<Cart/>}/>
//   </Route>
// ));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//     <App />
//     </RouterProvider>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
