import style from "./dashbord.module.css";
import InfoGerais from "../components/dashbordComponents/InfoGerais";
import ListaRecentes from "../components/dashbordComponents/ListaRecentes";
import ListaAcabando from "../components/dashbordComponents/ListaAcabando";
export default function Dashbord() {
  return (
    <>
      <div className={style.infodiv}>
        <InfoGerais />
      </div>
      <div className={style.listas}>
        <ListaRecentes />
        <ListaAcabando />
      </div>
    </>
  );
}
