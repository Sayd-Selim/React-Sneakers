export function Drawer({ onRemoveCart, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onRemoveCart}
            className="remove-btn cu-p"
            src="/img/btn-remove.svg"
            alt=""
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center p-10 mb-20">
                  <img
                    className="mr-20"
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="sneakers"
                  />

                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{`${obj.price} руб.`}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 489 руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow " />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt=""
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onRemoveCart} className="greenButton">
              <img src="/img/arrow.svg" alt="" />
              Вернуться назад
            </button>
          </div>
        )}

     
      </div>
    </div>
  );
}
