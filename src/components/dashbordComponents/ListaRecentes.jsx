import style from "./listaDashbord.module.css";
import { Link } from "react-router-dom";
export default function ListaRecentes() {
  const listaArryItems = JSON.parse(localStorage.getItem("allItemsArr"));
  const hoje = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);
  const recentItems = listaArryItems.filter(
    (item) =>
      new Date(item.cadastro) >= limitDate && new Date(item.cadastro) <= hoje
  );
  return (
    <>
      {recentItems.length > 0 ? (
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {recentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>
                  <Link to={`/items/allItems/${item.id}`}>
                    <button className="btnLista btnpadrao">Ver</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Link className={style.default} to="/items/novoItem">
          <span>Não há itens no momento adicione um clicando aqui!</span>
        </Link>
      )}
    </>
  );
}
