import { useNavigate } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function Login() {


  let navigat = useNavigate()

  function logInSucces() {
    navigat("/home")
  }

  return (
    <>
        <Navbar />
        <button onClick={logInSucces} className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white p-3 rounded-2xl font-bold text-center flex justify-center items-center">
          Success
        </button>
        <h1>Heloo from login</h1>
    </>
  )
}
