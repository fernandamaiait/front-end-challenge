interface ITrailerProps {
  key: string;
  site: string;
}

export default function Trailer({ key, site }: ITrailerProps) {
  console.log(site);
  return (
    <section className="mb-[64px]">
      <p className="text-[28px] font-bold mb-[14px] sm:mb-6">Trailer</p>
      <iframe
        className="aspect-video w-full sm:h-[510px] sm:w-auto"
        src={`https://www.youtube.com/embed/${key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </section>
  );
}
