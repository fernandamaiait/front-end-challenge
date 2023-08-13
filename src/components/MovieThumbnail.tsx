import moment from 'moment';
import 'moment/locale/pt-br';

interface IMovieThumbProps {
  posterPath: string;
  title: string;
  releaseDate: string;
}
export default function MovieThumbnail({ posterPath, title, releaseDate }: IMovieThumbProps) {
  moment.locale('pt-br');

  return (
    <div className="w-[155px] sm:w-[176px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        className="rounded w-[156px] h-[232px] sm:w-[176px] sm:h-[264px] border border-outline-var"
      />

      <p className="font-bold  text-sm sm:text-base text-on-surface sm:mt-2 mt-[10px]">{title}</p>
      <p className="font-bold text-xs sm:text-sm text-outline">
        {moment(releaseDate).format('DD MMM YYYY').toLocaleUpperCase()}
      </p>
    </div>
  );
}
