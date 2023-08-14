import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { api } from '../../api/api';
import Header from './components/Header';
import TopBar from '../../components/TopBar';

const CastList = React.lazy(() => import('./components/CastList'));
const Trailer = React.lazy(() => import('./components/Trailer'));
const Recommendations = React.lazy(() => import('./components/Recommendations'));

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

  console.log(release_dates);
  let releaseDates = release_dates.results.filter(
    (release: any) => 'iso_3166_1' in release && release.iso_3166_1 === 'BR'
  );

  if (releaseDates.length === 0) {
    releaseDates = release_dates.results.filter(
      (release: any) => 'iso_3166_1' in release && release.iso_3166_1 === 'US'
    );
  }

  if (releaseDates.length === 0) {
    releaseDates = release_dates.results;
  }

  const { certification, release_date } = releaseDates[0].release_dates[0];

  return (
    <div className="mb-8">
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
        releaseCountry={releaseDates[0].iso_3166_1}
      />
      <div className="px-4 sm:px-28">
        {cast.length !== 0 && <CastList cast={cast} />}
        {videos.results.length !== 0 && (
          <Trailer id={videos.results[0].key} site={videos.results[0].site} />
        )}
        {recommendations.results.length !== 0 && (
          <Recommendations recommendations={recommendations.results} />
        )}
      </div>
    </div>
  );
}
