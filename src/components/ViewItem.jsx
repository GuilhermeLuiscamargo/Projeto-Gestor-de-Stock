import style from "./individualItem.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

////
export default function ViewItem() {
  const lista = JSON.parse(localStorage.getItem("allItemsArr"));
  const [listaItems, setListaItems] = useState(lista);
  const { id } = useParams();
  const item = listaItems.find((item) => item.id === id);
  const navigate = useNavigate();
  /////
  function excludeItem(id) {
    const item = listaItems.find((item) => item.id === id);
    const indice = listaItems.indexOf(item);
    setListaItems(() => {
      listaItems.splice(indice, 1);
    });
    localStorage.setItem("allItemsArr", JSON.stringify(listaItems));
    navigate("/Projeto-Gestor-de-Stock/items/allItems");
  }
  return (
    <>
      <div className={style.nomeItemDiv}>
        <h1>{item.nome}</h1>
        <div>
          <Link to={`/Projeto-Gestor-de-Stock/items/allitems/edit/${id}`}>
            <button className="btnLista btnAtu">Atualizar</button>
          </Link>
          <button
            className="btnLista btnExc"
            onClick={() => excludeItem(item.id)}
          >
            Excluir
          </button>
        </div>
      </div>
      <div className={style.info}>
        <p>categoria: {item.categoria}</p>
        <p>Quantidade em estoque: {item.quantidade}</p>
        <p>Preço: ${item.preco}</p>
      </div>
      <div className={style.descricao}>
        <h2>Descrição</h2>
        <div className={style.span}>
          <p>{item.descricao}</p>
        </div>
      </div>
      <div className={style.data}>
        <p>
          cadastrado em :{" "}
          {new Date(item.cadastro).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </p>
        <p>
          Atualizado em :{" "}
          {new Date(item.atualização).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </p>
      </div>
    </>
  );
}
