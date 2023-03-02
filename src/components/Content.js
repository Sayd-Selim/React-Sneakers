export function Content() {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Все кроссовки</h1>

        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input type="Search" placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex justify-between ">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}
