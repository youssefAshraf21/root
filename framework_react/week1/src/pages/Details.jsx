import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import MovieDetails from "../components/Moviedetails/MovieDetails";

export default function Details() {

    const { id } = useParams();

  return (

    <>
      <Navbar />
    <MovieDetails movieId={id} />
    </>
  )
}
