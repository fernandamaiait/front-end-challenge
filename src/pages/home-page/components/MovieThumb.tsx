interface IMovieThumbProps {
  posterPath: string;
  title: string;
  relaseDate: string;
}
export default function MovieThumb({ posterPath, title, relaseDate }: IMovieThumbProps) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        className="rounded w-[156px] h-[232px] sm:w-[176px] sm:h-[264px] border border-outline-var"
      />

      <p>{title}</p>
      <span>{relaseDate}</span>
    </div>
  );
}
