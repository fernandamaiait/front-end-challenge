import { useLoaderData } from 'react-router-dom';
import { api } from '../../api/api';
import CastList from './components/CastList';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Trailer from './components/Trailer';
import TopBar from '../../components/TopBar';

export async function loader({ params }: any) {
  const movie = await api.get(
    `/movie/${params.movieId}?language=pt-BR&append_to_response=release_dates,credits,videos,recommendations`
  );
  return { movie: movie.data };
}
export default function MovieDetailPage() {
  const { movie } = useLoaderData() as any;

  const {
    title,
    poster_path,
    credits: { cast, crew },
    release_dates,
    genres,
    runtime,
    vote_average,
    overview,
    videos,
    recommendations
  } = movie;
  const { certification, release_date } = release_dates.results.filter(
    (release: { iso_3166_1: string }) => release.iso_3166_1 === 'BR'
  )[0].release_dates![0];
  console.log(videos);
  console.log(videos.results[0].key);
  console.log(recommendations);
  return (
    <>
      <TopBar />
      <Header
        posterPath={poster_path}
        title={title}
        certification={certification}
        releaseDate={release_date}
        genres={genres}
        runtime={runtime}
        crew={crew}
        voteAverage={vote_average}
        overview={overview}
      />
      <div className="px-4 sm:px-28">
        {cast.length !== 0 && <CastList cast={cast} />}
        {videos.length !== 0 && (
          <Trailer id={videos.results[0].key} site={videos.results[0].site} />
        )}
        {recommendations.results.length !== 0 && (
          <Recommendations recommendations={recommendations.results} />
        )}
      </div>
    </>
  );
}
