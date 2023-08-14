interface ICastThumbnailProps {
  name: string;
  character: string;
  profilePath?: string | null;
}
export default function CastThumbnail({
  name,
  character,
  profilePath = null
}: ICastThumbnailProps) {
  return (
    <div className="rounded flex flex-col flex-none mb-[26px] p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */}

      <img
        src={`https://image.tmdb.org/t/p/original/${profilePath}`}
        className="rounded w-[156px] h-[232px] sm:w-[176px] sm:h-[264px] border border-outline-var"
      />

      <p className="font-bold  text-sm sm:text-base text-on-surface sm:mt-2 mt-[10px]">{name}</p>
      <p className="font-bold text-xs sm:text-sm text-outline">{character}</p>
    </div>
  );
}
