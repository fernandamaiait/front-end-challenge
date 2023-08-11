import CategoriesList from './components/CategoriesList';
import MoviesList from './components/MoviesList';

export default function HomePage() {
  return (
    <div className="bg-surface">
      <CategoriesList />
      <div className="mx-4 my-8 sm:mx-28 sm:my-8">
        <MoviesList />
      </div>
    </div>
  );
}
