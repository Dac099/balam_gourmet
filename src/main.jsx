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
import { getLandingImages } from './loaders/getLandingImages.js';
import { getProducts } from './loaders/getProducts.js';
import { Product } from './pages/product.jsx';
import { getProduct } from './loaders/getProduct.js';

const router = createBrowserRouter([
  {
    path: '/',
    loader: getLandingImages,
    errorElement: <p>Error</p>,
    element: <App />,
    children: [
      {
        path: 'contacto',
        element: <Contact />
      },
      {
        path: 'productos',
        loader: getProducts,
        errorElement: <p>Error</p>,
        element: <Products />
      },
      {
        path: 'productos/:productID',
        loader: getProduct,
        element: <Product />
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
