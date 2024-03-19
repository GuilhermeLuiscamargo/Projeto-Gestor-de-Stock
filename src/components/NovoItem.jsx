import style from "./novoItem.module.css";
import { useState } from "react";
let allItems = [];
export default function NovoItem() {
  const listaItems = JSON.parse(localStorage.getItem("allItemsArr"));
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  function addProduct(ev) {
    ev.preventDefault();
    const item = {
      id: Math.random().toString(36).slice(-12),
      nome: nome,
      preco: preco,
      categoria: categoria,
      quantidade: quantidade,
      descricao: descricao,
      cadastro: new Date(),
      atualização: new Date(),
    };
    ///.toLocaleDateString("pt-BR", { timeZone: "UTC" }), data no formato ddmmyyyy só colocar após o date()
    if (localStorage.allItemsArr) {
      listaItems.push(item);
      localStorage.setItem("allItemsArr", JSON.stringify(listaItems));
    } else {
      allItems.push(item);
      localStorage.setItem("allItemsArr", JSON.stringify(allItems));
    }
    /////////////////////////
    setCategoria("");
    setDescricao("");
    setPreco("");
    setNome("");
    setQuantidade("");
  }
  return (
    <>
      <form onSubmit={addProduct} className={style.form}>
        <label htmlFor="Nome">Nome</label>
        <input
          type="text"
          maxLength={15}
          required
          value={nome}
          onInput={(ev) => {
            ev.target.value.length > 15
              ? (ev.target.value = ev.target.value.slice(0, 15))
              : ev.target.value;
          }}
          onChange={(ev) => setNome(ev.target.value)}
        />
        <label htmlFor="Quantidade">Quantidade</label>
        <input
          type="number"
          required
          value={quantidade}
          onInput={(ev) => {
            ev.target.value.length > 8
              ? (ev.target.value = ev.target.value.slice(0, 8))
              : ev.target.value;
          }}
          onChange={(ev) => setQuantidade(ev.target.value)}
        />
        <label htmlFor="Preço">Preço</label>
        <input
          type="number"
          required
          value={preco}
          onInput={(ev) => {
            ev.target.value.length > 11
              ? (ev.target.value = ev.target.value.slice(0, 11))
              : ev.target.value;
          }}
          onChange={(ev) => setPreco(ev.target.value)}
        />
        <label htmlFor="Categoria">Categoria</label>
        <input
          type="text"
          maxLength={15}
          required
          value={categoria}
          onInput={(ev) => {
            ev.target.value.length > 15
              ? (ev.target.value = ev.target.value.slice(0, 15))
              : ev.target.value;
          }}
          onChange={(ev) => setCategoria(ev.target.value)}
        />
        <label htmlFor="Descrição">Descrição</label>
        <textarea
          name="Descrição"
          value={descricao}
          onChange={(ev) => setDescricao(ev.target.value)}
        ></textarea>
        <button className="btnLista btnSave">Salvar</button>
      </form>
    </>
  );
}
