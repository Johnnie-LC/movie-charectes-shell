import React from "react";
import { createRoot } from 'react-dom/client';
import Home from './components/Container'
import Error from './components/RoutError'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HarryPotter from "./remoteComponents/HarryPotter";
import './index.css'

const RickAndMorty = () => <div>Rick and Morty federation</div>
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children:[
      {
        path: '/HarryPotter',
        element: <HarryPotter />
      },
      {
        path: '/RickandMorty',
        element: <RickAndMorty />
      }
    ]
  },
])

const App = () => { 
  return(<RouterProvider router={router} />)};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

