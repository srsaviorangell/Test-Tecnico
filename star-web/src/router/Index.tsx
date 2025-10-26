import { createHashRouter  } from "react-router-dom";
import App from "../App";
import FilmListPage from "../pages/FilmListPage";
import FilmDetailPage from "../pages/FilmDetailPage";
import PersonagensDetailPage from "../pages/CharacterDetailPage";
import ErrorPage from "../pages/error";



export const router = createHashRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <FilmListPage /> },
      { path: "/filmes/:id", element: <FilmDetailPage /> },
      { path: "/personagens/:id", element: <PersonagensDetailPage /> }
        
    ],
  },
]);

