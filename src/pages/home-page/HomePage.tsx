import { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList';
import CategoriesList from './components/CategoriesList';
import { api } from '../../api/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await api.get('/movie/popular');
      setMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-surface">
      <CategoriesList />
      <div className="mx-4 my-8 sm:mx-[102px] xl:mx-28 sm:my-8">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}
