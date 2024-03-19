import style from "./listaAllItems.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AllItems() {
  const listaItemsArry = JSON.parse(localStorage.getItem("allItemsArr"));
  const [listaItems, setlistaItems] = useState(listaItemsArry);
  function excludeItem(id) {
    if (confirm("tem certeza que deseja excluir?")) {
      const item = listaItemsArry.filter((item) => item.id !== id);
      setlistaItems(item);
      localStorage.setItem("allItemsArr", JSON.stringify(item));
    }
  }
  ///
  return (
    <>
      {listaItems.length ? (
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {listaItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>{item.categoria}</td>
                <td className={style.tdBtn}>
                  <Link to={`/items/allItems/${item.id}`}>
                    <button className="btnpadrao btnLista">ver</button>
                  </Link>
                  <Link to={`/items/allitems/Edit/${item.id}`}>
                    <button className="btnAtu btnLista">Atualizar</button>
                  </Link>
                  <button
                    className="btnExc btnLista"
                    onClick={() => excludeItem(item.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Link className={style.default} to="/items/novoItem">
          Não há itens no momento adicione um clicando aqui!
        </Link>
      )}
    </>
  );
}
