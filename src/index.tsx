import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import HomePage from './pages/home-page/HomePage';
import TopBar from './components/TopBar';
import MovieDetailPage from './pages/movie-detail-page/MovieDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TopBar />
    {/* <HomePage /> */}
    <MovieDetailPage />
  </React.StrictMode>
);
