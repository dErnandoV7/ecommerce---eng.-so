import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Main from './router/Main.jsx'
import Login from './router/Login.jsx'
import Painel from './router/Painel.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EcommerceContextProvider } from "./context/ecommerceContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/painel", element: <Painel /> },
]);

createRoot(document.getElementById('root')).render(
  <EcommerceContextProvider>
    <RouterProvider router={router} />
  </EcommerceContextProvider>
);