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
    path: "/movies/:id",
    element: <Movie />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  ];

export default routes;