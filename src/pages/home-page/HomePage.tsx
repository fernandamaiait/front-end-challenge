import MoviesList from '../../components/MoviesList';
import Header from './components/Header';
import { api } from '../../api/api';
import { useLoaderData, useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import PaginationBar from '../../design-system/PaginationBar';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const pageIndex = url.searchParams.get('pageIndex');
  const movies = await api.get(`/movie/popular?language=pt-BR&page=${pageIndex}`);
  const { results, total_pages } = movies.data;
  const totalPages = total_pages <= 500 ? total_pages : 500;
  return { movies: results, totalPages, pageIndex };
}

export default function HomePage() {
  const navigate = useNavigate();
  const { movies, totalPages, pageIndex } = useLoaderData() as any;

  const handlePageClick = (e: any) => {
    navigate(`/?pageIndex=${e.selected + 1}`);
  };

  const handleClickLastPage = () => navigate(`/?pageIndex=${totalPages}`);

  return (
    <>
      <TopBar />
      <div className="bg-surface">
        <Header />
        <main className="mb-8">
          <section className="mx-4 my-8 sm:mx-[102px] xl:mx-28 sm:my-8">
            <MoviesList movies={movies} />
          </section>
          <div className="mt-[96px] sm:mt-[70px]  flex justify-center">
            <PaginationBar
              handleClick={handlePageClick}
              totalPages={totalPages}
              pageIndex={pageIndex}
              handleClickLastPage={handleClickLastPage}
            />
          </div>
        </main>
      </div>
    </>
  );
}
