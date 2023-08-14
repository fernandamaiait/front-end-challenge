import moment from 'moment';

interface IHeaderProps {
  posterPath: string;
  title: string;
  certification: string;
  releaseDate: string;
  genres: Array<any>;
  runtime: number;
  crew: Array<any>;
  voteAverage: number;
  overview: string;
  releaseCountry: string;
}

export default function Header({
  posterPath,
  title,
  certification,
  releaseDate,
  genres,
  runtime,
  crew,
  voteAverage,
  overview,
  releaseCountry
}: IHeaderProps) {
  moment.locale();
  const mpaFilmRating =
    releaseCountry === 'US' ? certification : certification ? `${certification} anos` : 'Livre';
  const genresText = genres.map((genre) => genre.name).join(', ');
  const formattedReleaseDate = `${moment(releaseDate).format('DD/MM/YYYY')} (${releaseCountry})`;
  const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  const movieDetailsText = [mpaFilmRating, genresText, formattedReleaseDate, formattedRuntime].join(
    ' • '
  );
  return (
    <div className="bg-secondary w-full flex flex-col text-on-secondary   pt-[34px] py-4 pb-12 px-4 sm:px-28">
      <div className="flex flex-col sm:flex-row sm:relative top-[72px] sm:gap-8 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          className="h-[279px] sm:h-[574px] self-center rounded-lg shadow"
        />
        <div className="flex flex-col">
          <p className="font-bold text-[32px] mt-[42px] sm:mt-0">
            {title} ({moment(releaseDate).format('YYYY')})
          </p>
          <div className="flex flex-col sm:hidden text-lg">
            <span>{mpaFilmRating}</span>
            <span>{formattedReleaseDate}</span>
            <span>{genresText}</span>
            <span>{formattedRuntime}</span>
          </div>
          <div className="hidden sm:block">{movieDetailsText}</div>
          <div className="h-[60px] flex gap-[11.6px] items-center">
            <span>{Math.round(voteAverage * 10)}%</span>
            <p className="text-base">Avaliação dos usuários</p>
          </div>
          <p className="font-bold text-xl mb-2 ">Sinopse</p>
          <p className="text-on-secondary-var text-base mb-8">{overview}</p>
          <div className="flex flex-wrap gap-x-[33px] gap-y-[23px]">
            {crew.slice(0, 4).map(({ id, name, job }) => (
              <div key={id + job} className="flex flex-col w-[140px] sm:w-[174px]">
                <p className="text-base font-bold">{name}</p>
                <p className="text-sm">{job}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
