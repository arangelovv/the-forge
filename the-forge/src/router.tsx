import { createBrowserRouter, Navigate } from "react-router-dom";
import AppCore from "./features/core/core";
import CharactersPage from "./features/$characters/characters.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/core" />,
  },
  {
    path: "/core",
    element: <AppCore />,
    children: [
      {
        index: true,
        element: <Navigate to="characters" />,
      },
      { path: "characters", element: <CharactersPage /> },
    ],
  },
]);
