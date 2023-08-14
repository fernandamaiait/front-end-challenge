import MoviesList from '../../components/MoviesList';
import CategoriesList from './components/CategoriesList';
import { api } from '../../api/api';
import { useLoaderData } from 'react-router-dom';
import TopBar from '../../components/TopBar';

export async function loader() {
  const movies = await api.get('/movie/popular');
  console.log(movies);
  return { movies: movies.data.results };
}

export default function HomePage() {
  const { movies } = useLoaderData() as any;
  return (
    <>
      <TopBar />
      <div className="bg-surface">
        <CategoriesList />
        <div className="mx-4 my-8 sm:mx-[102px] xl:mx-28 sm:my-8">
          <MoviesList movies={movies} />
        </div>
      </div>
    </>
  );
}
