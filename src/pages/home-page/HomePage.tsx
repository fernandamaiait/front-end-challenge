import CategoriesList from './components/CategoriesList';
import MoviesList from './components/MoviesList';

const movies = [
  {
    adult: false,
    backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
    genre_ids: [16, 28, 12, 878],
    id: 569094,
    original_language: 'en',
    original_title: 'Spider-Man: Across the Spider-Verse',
    overview:
      'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
    popularity: 3594.044,
    poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    release_date: '2023-05-31',
    title: 'Spider-Man: Across the Spider-Verse',
    video: false,
    vote_average: 8.5,
    vote_count: 2988
  },
  {
    adult: false,
    backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: 'en',
    original_title: 'Transformers: Rise of the Beasts',
    overview:
      'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
    popularity: 2427.109,
    poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
    release_date: '2023-06-06',
    title: 'Transformers: Rise of the Beasts',
    video: false,
    vote_average: 7.5,
    vote_count: 2544
  },
  {
    adult: false,
    backdrop_path: '/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg',
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: 'en',
    original_title: 'Barbie',
    overview:
      'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    popularity: 2247.116,
    poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
    release_date: '2023-07-19',
    title: 'Barbie',
    video: false,
    vote_average: 7.5,
    vote_count: 2702
  },
  {
    adult: false,
    backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
    genre_ids: [28, 12, 878],
    id: 298618,
    original_language: 'en',
    original_title: 'The Flash',
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    popularity: 2121.743,
    poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
    release_date: '2023-06-13',
    title: 'The Flash',
    video: false,
    vote_average: 6.9,
    vote_count: 2149
  },
  {
    adult: false,
    backdrop_path: '/bz66a19bR6BKsbY8gSZCM4etJiK.jpg',
    genre_ids: [28, 27, 53],
    id: 1006462,
    original_language: 'en',
    original_title: 'The Flood',
    overview:
      'A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.',
    popularity: 2094.586,
    poster_path: '/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg',
    release_date: '2023-07-14',
    title: 'The Flood',
    video: false,
    vote_average: 6.8,
    vote_count: 58
  },
  {
    adult: false,
    backdrop_path: '/zN41DPmPhwmgJjHwezALdrdvD0h.jpg',
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: 'en',
    original_title: 'Meg 2: The Trench',
    overview:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
    popularity: 2086.683,
    poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
    release_date: '2023-08-02',
    title: 'Meg 2: The Trench',
    video: false,
    vote_average: 7.1,
    vote_count: 319
  },
  {
    adult: false,
    backdrop_path: '/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg',
    genre_ids: [27, 9648, 53],
    id: 614479,
    original_language: 'en',
    original_title: 'Insidious: The Red Door',
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    popularity: 1917.785,
    poster_path: '/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
    release_date: '2023-07-05',
    title: 'Insidious: The Red Door',
    video: false,
    vote_average: 6.9,
    vote_count: 716
  },
  {
    adult: false,
    backdrop_path: '/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg',
    genre_ids: [28, 12, 53, 35],
    id: 457332,
    original_language: 'en',
    original_title: 'Hidden Strike',
    overview:
      'Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.',
    popularity: 1578.368,
    poster_path: '/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg',
    release_date: '2023-07-06',
    title: 'Hidden Strike',
    video: false,
    vote_average: 7.2,
    vote_count: 457
  }
];

export default function HomePage() {
  return (
    <div className="bg-surface">
      <CategoriesList />
      <div className="mx-4 my-8 sm:mx-[102px] xl:mx-28 sm:my-8">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}
