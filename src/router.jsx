import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Catalogue from "./pages/Catalogue";
import Account from "./pages/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <h1>Error</h1>,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "catalogue",
            element: <Catalogue />,
          },
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "*",
            element: <h1>404</h1>,
          },
        ],
      },
    ],
  },
]);

export const PAGES = [];

router.routes[0].children[0].children.map((page) => {
  if (page.path && page.path != "*") {
    let newPath = [];
    page.path != undefined &&
      page.path.split("-").forEach((segment) => {
        const capitalise = segment[0].toUpperCase() + segment.substr(1);
        newPath.push(capitalise);
      });
    PAGES.push({ name: newPath.join(" "), url: "/" + page.path });
  }
});
