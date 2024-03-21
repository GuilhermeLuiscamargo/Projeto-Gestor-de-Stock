import style from "./layout.module.css";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <p>Stock</p>
          <span>
            <Link to="/Projeto-Gestor-de-Stock/">Inicio</Link>
            <Link to="/Projeto-Gestor-de-Stock/items/allItems">Items</Link>
          </span>
        </nav>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}>
        <p>Feito com react e react Router Dom</p>
      </footer>
    </>
  );
}
