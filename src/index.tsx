import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage, { loader as moviesLoader } from './pages/home-page/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetailPage, { loader as movieLoader } from './pages/movie-detail-page/MovieDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
  {
    path: '/',
    loader: moviesLoader,
    element: <HomePage />
  },
  {
    path: 'movie/:movieId',
    loader: movieLoader,
    element: <MovieDetailPage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
