//import FilterButton from './FilterButton';

export default function CategoriesList() {
  // const genres = [
  //   {
  //     id: 28,
  //     name: 'Ação'
  //   },
  //   {
  //     id: 12,
  //     name: 'Aventura'
  //   },
  //   {
  //     id: 16,
  //     name: 'Animação'
  //   },
  //   {
  //     id: 35,
  //     name: 'Comédia'
  //   },
  //   {
  //     id: 80,
  //     name: 'Crime'
  //   },
  //   {
  //     id: 99,
  //     name: 'Documentário'
  //   },
  //   {
  //     id: 18,
  //     name: 'Drama'
  //   },
  //   {
  //     id: 10751,
  //     name: 'Família'
  //   },
  //   {
  //     id: 14,
  //     name: 'Fantasia'
  //   },
  //   {
  //     id: 36,
  //     name: 'História'
  //   },
  //   {
  //     id: 27,
  //     name: 'Terror'
  //   },
  //   {
  //     id: 10402,
  //     name: 'Música'
  //   },
  //   {
  //     id: 9648,
  //     name: 'Mistério'
  //   },
  //   {
  //     id: 10749,
  //     name: 'Romance'
  //   },
  //   {
  //     id: 878,
  //     name: 'Ficção científica'
  //   },
  //   {
  //     id: 10770,
  //     name: 'Cinema TV'
  //   },
  //   {
  //     id: 53,
  //     name: 'Thriller'
  //   },
  //   {
  //     id: 10752,
  //     name: 'Guerra'
  //   },
  //   {
  //     id: 37,
  //     name: 'Faroeste'
  //   }
  // ];
  return (
    <div className="bg-secondary flex flex-col w-full px-4  py-10 sm:py-[84px] justify-center sm:justify-start sm:items-center ">
      <p className="font-roboto text-on-secondary text-[24px] leading-[56px] font-bold sm:text-center sm:text-[48px] sm:w-[781px]">
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </p>
      {/* <p className="text-sm font-bold text-on-secondary self-start sm:self-center mt-9 sm:mt-10">
        FILTRE POR:
      </p>
      <div className="flex flex-wrap gap-3 sm:justify-center items-center mt-2">
        {genres.map(({ id, name }) => (
          <FilterButton key={id} text={name} onClick={() => {}} selected={false} />
        ))}
        {genres.map(({ id, name }) => (
          <FilterButton key={id} text={name} onClick={() => {}} selected={true} />
        ))}
      </div> */}
    </div>
  );
}
