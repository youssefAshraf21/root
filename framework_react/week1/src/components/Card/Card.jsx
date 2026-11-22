    export default function Card({
    movieName,
    movieVoteAvg,
    movieDescription,
    imgMovie,
    releaseDate,
    }) {
    const base = "https://image.tmdb.org/t/p";

    return (
        <div className="mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-xl bg-white shadow-md">
        <div className="relative">
            <img
            src={`${base}/w780${imgMovie}`}
            srcSet={`${base}/w500${imgMovie} 500w, ${base}/w780${imgMovie} 780w, ${base}/original${imgMovie} 1400w`}
            sizes="320px"
            alt={movieName}
            loading="lazy"
            className="aspect-[2/3] w-full object-cover"
            />
            <span className="absolute right-2 top-2 rounded-md bg-black/75 px-2 py-1 text-sm font-bold text-amber-300">
            ★ {movieVoteAvg.toFixed(1)}
            </span>
        </div>

        <div className="p-4">
            <h2 className="truncate text-lg font-bold text-gray-900" title={movieName}>
            {movieName}
            </h2>
            <p className="text-sm text-gray-500">{releaseDate}</p>
            <p className="mt-2 line-clamp-3 text-sm text-gray-600">{movieDescription}</p>
        </div>
        </div>
    );
    }