
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from "react-router";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Trending from "./pages/Trending";
import Details from "./pages/Details";


function App() {

  const router = createBrowserRouter([
    {index:true, element: <Navigate to={"/home"} />},
    {path: "/home", element:<Home />},
    {path: "/about", element:<Trending />},
    {path: "/contact", element:<Contact />},
    {path: "/login", element:<Login />},
    {path: "/*", element:<Notfound />},
    {path: "/details/:id", element:<Details />}

  ])



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
