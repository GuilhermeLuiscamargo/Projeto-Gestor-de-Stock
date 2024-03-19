import style from "./atualizarItem.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
/////////////
export default function EditItem() {
  const listaItems = JSON.parse(localStorage.getItem("allItemsArr"));
  const { id } = useParams();
  const item = listaItems.find((item) => item.id === id);
  console.log(item);

  const navigate = useNavigate();
  ////
  const [nome, setNome] = useState(item.nome);
  const [preco, setPreco] = useState(item.preco);
  const [categoria, setCategoria] = useState(item.categoria);
  const [descricao, setDescricao] = useState(item.descricao);
  const [quantidade, setQuantidade] = useState(item.quantidade);
  /////
  function editedItem(ev) {
    ev.preventDefault();
    const indiceItem = listaItems.indexOf(item);
    listaItems[indiceItem].nome = nome;
    listaItems[indiceItem].preco = preco;
    listaItems[indiceItem].categoria = categoria;
    listaItems[indiceItem].descricao = descricao;
    listaItems[indiceItem].quantidade = quantidade;
    listaItems[indiceItem].atualização = new Date();
    localStorage.setItem("allItemsArr", JSON.stringify(listaItems));
    alert("item Atualizado com sucesso");
    navigate("/items/allItems");
  }
  return (
    <>
      <h1 className={style.h1}>Atualizar item: {item.nome}</h1>
      <form onSubmit={editedItem} className={style.form}>
        <label htmlFor="Nome">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(ev) => setNome(ev.target.value)}
        />

        <label htmlFor="Quantidade">Quantidade</label>
        <input
          type="number"
          value={quantidade}
          onChange={(ev) => setQuantidade(ev.target.value)}
        />
        <label htmlFor="Preço">Preço</label>
        <input
          type="number"
          value={preco}
          onChange={(ev) => setPreco(ev.target.value)}
        />
        <label htmlFor="Categoria">Categoria</label>
        <input
          type="text"
          value={categoria}
          onChange={(ev) => setCategoria(ev.target.value)}
        />
        <label htmlFor="Descrição">Descrição</label>
        <textarea
          name="Descrição"
          cols="30"
          rows="10"
          value={descricao}
          onChange={(ev) => setDescricao(ev.target.value)}
        ></textarea>
        <button className="btnLista btnAtu">Atualizar</button>
      </form>
    </>
  );
}
