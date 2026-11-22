
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";


function App() {

  const router = createBrowserRouter([
    {index:true, element: <Navigate to={"/home"} />},
    {path: "/home", element:<Home />},
    {path: "/about", element:<About />},
    {path: "/contact", element:<Contact />},
    {path: "/login", element:<Login />},
    {path: "/*", element:<Notfound />}

  ])



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
