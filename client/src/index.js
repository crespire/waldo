import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Menu from './components/Menu';
import Game from './components/Game';
import MenuLeaderboard from './components/MenuLeaderboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: '/game/:image',
        element: <Game />,
      },
      {
        path: '/leaderboards/:image',
        element: <MenuLeaderboard />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
