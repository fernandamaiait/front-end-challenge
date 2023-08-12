interface IMovieThumbProps {
  posterPath: string;
  title: string;
  relaseDate: string;
}
export default function MovieThumbnail({ posterPath, title, relaseDate }: IMovieThumbProps) {
  return (
    <div className="w-[155px] sm:w-[176px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        className="rounded w-[156px] h-[232px] sm:w-[176px] sm:h-[264px] border border-outline-var"
      />

      <p className="font-bold  text-sm sm:text-base text-on-surface sm:mt-2 mt-[10px]">{title}</p>
      <span className="font-bold text-xs sm:text-sm text-outline">{relaseDate}</span>
    </div>
  );
}
