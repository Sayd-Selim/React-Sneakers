import React from "react";
import { Card } from "./components/Card/Card";
import axios from "axios";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

export function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [addCart, setAddCart] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://63fd0281677c41587318637e.mockapi.io/items")
      .then((res) => setSneakers(res.data));
      
    axios
      .get("https://63fd0281677c41587318637e.mockapi.io/cart")
      .then((res) => setAddCart(res.data));
  }, []);

  const onAddToCart = (items) => {
    axios
    .post("https://63fd0281677c41587318637e.mockapi.io/cart", items)
    setAddCart([...addCart, items]);
  };


  const onRemoveItem = (id) => {
    console.log(id);
    axios
    .delete(`https://63fd0281677c41587318637e.mockapi.io/cart/${id}`)
    setAddCart(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => { 
    setSearchInput(event.target.value);
  };

  return (                                      
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer onRemove={onRemoveItem} items={addCart} onRemoveCart={() => setCartOpened(false)} />
      ) : null}
      <Header onCliked={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchInput
              ? `Поиск по запросу: '${searchInput}'`
              : "Все кроссовки"}
          </h1>

          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              type="Search"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap ">
          {sneakers
            .filter((item) =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
            )

            .map((item) => (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}

                onPlus={() => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );

 
  
}
