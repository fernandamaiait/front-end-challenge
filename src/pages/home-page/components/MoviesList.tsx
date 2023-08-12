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
    <div className="flex flex-wrap gap-4 sm:gap-8 ">
      {movies.map((movie) => {
        const { id, title, poster_path, release_date } = movie;
        return (
          <MovieThumbnail
            key={id}
            posterPath={poster_path}
            title={title}
            relaseDate={release_date}
          />
        );
      })}
    </div>
  );
}
