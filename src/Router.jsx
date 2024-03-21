import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashbord from "./pages/Dashbord";
import Items from "./pages/Items";
import AllItems from "./components/AllItems";
import NovoItem from "./components/NovoItem";
import ViewItem from "./components/ViewItem";
import EditItem from "./components/EditItem";
const router = createBrowserRouter([
  {
    path: "/Projeto-Gestor-de-Stock/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/Projeto-Gestor-de-Stock/",
        element: <Dashbord />,
      },
      {
        path: "/Projeto-Gestor-de-Stock/items",
        element: <Items />,
        children: [
          {
            path: "/Projeto-Gestor-de-Stock/items/allItems",
            element: <AllItems />,
          },
          {
            path: "/Projeto-Gestor-de-Stock/items/allItems/:id",
            element: <ViewItem />,
          },
          {
            path: "/Projeto-Gestor-de-Stock/items/allitems/edit/:id",
            element: <EditItem />,
          },
          {
            path: "/Projeto-Gestor-de-Stock/items/novoItem",
            element: <NovoItem />,
          },
        ],
      },
    ],
  },
]);
export default router;
