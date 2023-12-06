import React from "react";
import App from "./App";
import "./App.scss";
import Home from './routes/Home'
import Anuncio from './routes/Anuncio'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Anuncio />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
