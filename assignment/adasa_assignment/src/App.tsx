import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import About from "./pages/About";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blogDetails", element: <Blogdetails /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;