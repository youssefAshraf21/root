
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieDetails({ movieId }) {

    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCredits, setMovieCredits] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getMovieDetails() {
            try {
                const API_KEY = "714310e2d80eb3f2425bc9b02a028e0c";

                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
                );

                const creditsResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
                );

                setMovieDetails(movieResponse.data);
                setMovieCredits(creditsResponse.data);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails();

    }, [movieId]);

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    if (!movieDetails) {
        return <h2 className="text-center mt-10">Movie not found!</h2>;
    }

    const base = "https://image.tmdb.org/t/p";

    const directors = movieCredits?.crew.filter(
        person => person.job === "Director"
    ) || [];

    return (
        <div className="container mx-auto px-4 py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <img
                    src={`${base}/w780${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className="w-full max-w-sm rounded-xl mx-auto"
                />

                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        {movieDetails.title}
                    </h1>

                    <p className="text-gray-500 mb-4">
                        {movieDetails.release_date}
                    </p>

                    <p className="mb-4">
                        {movieDetails.overview}
                    </p>

                    <p>
                        <strong>Rating:</strong> {movieDetails.vote_average?.toFixed(1)}
                    </p>

                    <p>
                        <strong>Runtime:</strong> {movieDetails.runtime} minutes
                    </p>

                    <p>
                        <strong>Genres:</strong>{" "}
                        {movieDetails.genres.map(genre => genre.name).join(", ")}
                    </p>
                </div>

            </div>
            <h2 className="text-3xl font-bold mt-12 mb-6">
                Directors
            </h2>

            <div className="flex flex-wrap gap-6">
                {directors.map(person => (
                    <div key={person.id} className="text-center w-32">
                        <img
                            src={
                                person.profile_path
                                    ? `${base}/w185${person.profile_path}`
                                    : "https://placehold.co/185x278?text=No+Image"
                            }
                            alt={person.name}
                            className="w-32 h-40 object-cover rounded-xl"
                        />

                        <h3 className="font-semibold mt-2">
                            {person.name}
                        </h3>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
                Top Cast
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {movieCredits?.cast.slice(0, 10).map(person => (
                    <div key={person.id} className="text-center">
                        <img
                            src={
                                person.profile_path
                                    ? `${base}/w185${person.profile_path}`
                                    : "https://placehold.co/185x278?text=No+Image"
                            }
                            alt={person.name}
                            className="w-full h-48 object-cover rounded-xl"
                        />

                        <h3 className="font-semibold mt-2">
                            {person.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {person.character}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}
