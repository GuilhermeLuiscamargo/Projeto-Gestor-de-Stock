import style from "./listaDashbord.module.css";
import { Link } from "react-router-dom";
export default function ListaAcabando() {
  const listaItems = JSON.parse(localStorage.getItem("allItemsArr"));
  const listaItemsAcabando = listaItems
    ? listaItems.filter((item) => Number(item.quantidade) <= 10)
    : undefined;
  return (
    <>
      {listaItemsAcabando && listaItemsAcabando.length > 0 ? (
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th>Itens Acabando</th>
              <th>Qtd.</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {listaItemsAcabando.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td className={style.quantidadeTD}>{item.quantidade}</td>
                <td>
                  <Link
                    to={`/Projeto-Gestor-de-Stock/items/allItems/${item.id}`}
                  >
                    <button className="btnLista btnpadrao">ver</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.default}>Não há items em falta no momento!</p>
      )}
    </>
  );
}
