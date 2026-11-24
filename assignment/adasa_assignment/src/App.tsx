import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Layout from "./Layout/Layout"

function App() {

  const router = createBrowserRouter([
    {path:"/", element:<Layout />, children: [
      {index:true, element: <Navigate to={"/home"} />},
      {path: "home", element:<Home />},
      {path: "blog", element:<Blog />},
      {path: "about", element:<About />}
    ]}

  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
