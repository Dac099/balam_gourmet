import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';
import { Contact } from './pages/contact.jsx';
import { Products } from './pages/products.jsx';
import { Privacity } from './pages/privacity';
import { Returns } from './pages/returns';
import { Shipping } from './pages/shipping';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'contacto',
        element: <Contact />
      },
      {
        path: 'productos',
        element: <Products />
      },
      {
        path: 'privacidad',
        element: <Privacity />
      },
      {
        path: 'devoluciones',
        element: <Returns />
      },
      {
        path: 'envios',
        element: <Shipping />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
