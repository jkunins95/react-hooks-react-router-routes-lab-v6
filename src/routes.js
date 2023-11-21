import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Movie />,
  },
  {
    path: "/",
    element: <Actors />,
  },
  {
    path: "/",
    element: <Directors />,
  },
  ];

export default routes;