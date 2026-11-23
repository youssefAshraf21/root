import { useState , useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card"
import axios from "axios";

export default function Trending() {
  const [trendMovies, settrendMovies] = useState([])

  useEffect(()=> {
    async function getTrendMovies(){
      const API_KEY = "714310e2d80eb3f2425bc9b02a028e0c"
      const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      console.log(data.results)
      settrendMovies(data.results)
    }
    getTrendMovies()
  },[])
  return (
    <>
      <Navbar />
      <div className="text-center  mt-5 text-5xl font-bold text-red-500 p-4 underline">
        <h1>Trending Movies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {trendMovies.map((movie) => {
          return(
            
            <Card 
              key={movie.id}
              id={movie.id}
              movieName={movie.title}
              movieVoteAvg={movie.vote_average}
              movieDescription={movie.overview}
              imgMovie={movie.poster_path}
              releaseDate={movie.release_date}
            />
          )
        })}
      </div>
    </>
  )
}

