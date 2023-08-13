import MoviesList from '../../../components/MoviesList';

interface IRecommendationsProps {
  recommendations: Array<unknown>;
}
export default function Recommendations({ recommendations }: IRecommendationsProps) {
  return (
    <section>
      <p className="font-bold text-[28px] mb-4 sm:mb-6 ">Recomendações</p>
      <MoviesList movies={recommendations} />
    </section>
  );
}
