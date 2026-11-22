import Card from "../components/Card/Card"
import Navbar from "../components/Navbar/Navbar"
import Loader from "../components/Loader/Loader"
import { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [showCard, setShowCards] = useState(true)

    // function deleteProduct(id) {
    //     // let newProducts = structuredClone(products);
    //     // newProducts.splice(index, 1);
    //     // setProducts(newProducts);
    //     //delete by fillter array method
    //     let filterArr = products.filter((prod)=> {
    //         return prod.id != id
    //     })
    //     setProducts(filterArr)
    // }

    useEffect(() => {
        async function getMovies() {
        const API_KEY = "714310e2d80eb3f2425bc9b02a028e0c"
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        console.log(data.results)
        setMovies(data.results)
    }
        getMovies()
    },[])

    return (
        <>
        <Navbar />
        <button className="bg-red-600 hover:bg-red-900 transition-all duration-300 text-white font-medium p-3 rounded-lg"
        onClick={() => {
            setShowCards(!showCard)
        }}>
            Hide All Cards
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
            {movies.length === 0 ? (
                <Loader />
            ) : showCard === true ? (
                movies.map((movie, index) => {
                    return (
                        <Card
                            key={movie.id}
                            movieName={movie.title}
                            movieVoteAvg={movie.vote_average}
                            movieDescription={movie.overview}
                            imgMovie={movie.backdrop_path}
                            releaseDate={movie.release_date}
                            index={index}
                            id={movie.id}
                        />
                    )
                })
            ) : null}
        </div>
        </>
    )
}
