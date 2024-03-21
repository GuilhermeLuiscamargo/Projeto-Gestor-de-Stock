import style from "./itemLayout.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Items() {
  const { pathname } = useLocation();
  return (
    <>
      <div className={style.layout}>
        <Link
          to="/Projeto-Gestor-de-Stock/items/allItems"
          className={`${
            pathname === "/Projeto-Gestor-de-Stock/items/allItems"
              ? style.active
              : ""
          }`}
        >
          Todos os itens
        </Link>
        <Link
          to="/Projeto-Gestor-de-Stock/items/novoItem"
          className={`${
            pathname === "/Projeto-Gestor-de-Stock/items/novoItem"
              ? style.active
              : ""
          }`}
        >
          Novo item
        </Link>
      </div>
      <div className={style.div}>
        <Outlet />
      </div>
    </>
  );
}
