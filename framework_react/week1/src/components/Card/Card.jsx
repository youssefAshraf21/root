    import { useNavigate } from "react-router";
    export default function Card({
    movieName,
    movieVoteAvg,
    movieDescription,
    imgMovie,
    releaseDate,
    id,
    }) {
    const navigate = useNavigate();
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
            <button
                onClick={() => navigate(`/details/${id}`)}
                className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 mt-5 p-3 rounded-lg text-white font-medium"
            >
                More Details
            </button>
        </div>
        </div>
    );
    }