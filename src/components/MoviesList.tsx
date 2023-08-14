import MovieThumbnail from './MovieThumbnail';

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface IMoviesListProps {
  movies: Array<any>;
}
export default function MoviesList({ movies }: IMoviesListProps) {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 justify-start sm:justify-start">
      {movies.map((movie) => {
        const { id, title, poster_path, release_date } = movie;
        return (
          <MovieThumbnail
            key={id}
            id={id}
            posterPath={poster_path}
            title={title}
            releaseDate={release_date}
          />
        );
      })}
    </div>
  );
}
