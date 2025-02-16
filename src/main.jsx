import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Main from './router/Main.jsx'
import Login from './router/Login.jsx'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { EcommerceContextProvider } from './context/ecommerceContext.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <EcommerceContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </EcommerceContextProvider>

)
