import CastThumbnail from './CastThumbnail';

interface ICastList {
  cast: Array<any>;
}

export default function CastList({ cast }: ICastList) {
  return (
    <section className="flex flex-col py-8 sm:py-12">
      <p className="font-bold text-[28px]">Elenco original</p>
      <div className="flex gap-4 overflow-x-auto mt-[10px]">
        {cast.map(({ id, profile_path, name, character }) => (
          <CastThumbnail key={id} name={name} profilePath={profile_path} character={character} />
        ))}
      </div>
    </section>
  );
}
