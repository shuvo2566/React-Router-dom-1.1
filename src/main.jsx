import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contactus from './components/Contactus';
import User from './components/User';
import Github from './components/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'home',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ]); 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contactus/>} />
      <Route path="user/:userid" element={<User/>} />
      <Route path="github" element={<Github/>} />
    </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
