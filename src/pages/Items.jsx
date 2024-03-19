import style from "./itemLayout.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Items() {
  const { pathname } = useLocation();
  return (
    <>
      <div className={style.layout}>
        <Link
          to="/items/allItems"
          className={`${pathname === "/items/allItems" ? style.active : ""}`}
        >
          Todos os itens
        </Link>
        <Link
          to="/items/novoItem"
          className={`${pathname === "/items/novoItem" ? style.active : ""}`}
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
