import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AllCoffees from './components/AllCoffees.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/addCoffee',
        element: <AddCoffee />
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: '/allCoffees',
        loader: () => fetch('http://localhost:5000/coffees'),
        element: <AllCoffees />
      },
      {
        path: '/coffeeDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <CoffeeDetails />,
      }, {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
