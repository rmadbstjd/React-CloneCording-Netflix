import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Root from "./pages/Root";
//eebdcdc144943b1db8e1f2c530ac9812D
function App() {
  const router = createBrowserRouter([
    {
      Ppath: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main></Main>,
        },
        { path: "/Movies", element: <Movies></Movies> },
        {
          path: "/Movies/:id",
          element: <MovieDetail></MovieDetail>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
