import style from "./infoGerais.module.css";

export default function InfoGerais() {
  const listaItems = JSON.parse(localStorage.getItem("allItemsArr"));
  function getAllinventory() {
    let total = 0;
    if (listaItems) {
      listaItems.forEach((e) => {
        total += Number(e.quantidade);
      });
    }
    return total;
  }
  function getDefitItems() {
    if (listaItems) {
      const total = listaItems.filter((arr) => Number(arr.quantidade) < 10);
      return total.length;
    }
    return 0;
  }
  function getRecentItems() {
    const hoje = new Date();
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - 10);
    const recentItems = listaItems.filter(
      (item) =>
        new Date(item.cadastro) >= limitDate && new Date(item.cadastro) <= hoje
    );
    return recentItems ? recentItems.length : 0;
  }
  return (
    <>
      <div className={style.diversidade}>
        <p>Diversidade</p>
        <p>{!listaItems ? 0 : listaItems.length}</p>
      </div>
      <div className={style.inventarioTotal}>
        <p>Inventario Total</p>
        <p>{getAllinventory()}</p>
      </div>
      <div className={style.recentes}>
        <p>Itens Recentes</p>
        <p>{getRecentItems()}</p>
      </div>
      <div className={style.acabando}>
        <p>Itens Acabando </p>
        <p>{getDefitItems()}</p>
      </div>
    </>
  );
}
