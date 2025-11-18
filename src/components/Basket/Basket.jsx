import Item from "../Item/Item";
import "./basket.css";

const Basket = ({ basket, setBasket }) => {
  const calcSousTotal = () => {
    let sousTotal = 0;
    for (let i = 0; i < basket.length; i++) {
      sousTotal += basket[i].price * basket[i].number;
    }
    return Number.parseFloat(sousTotal).toFixed(2);
  };

  const calcTotal = () => {
    return Number.parseFloat(Number(calcSousTotal()) + 2.5).toFixed(2);
  };
  return (
    <aside className="basket">
      <button
        className={basket.length > 0 ? "" : "disable-btn"}
        onClick={() => {
          console.log(basket);
        }}
      >
        Valider mon panier
      </button>
      {basket.length > 0 ? (
        <>
          <div className="achat">
            <div className="items">
              {basket.map((item, index) => {
                return (
                  <Item
                    key={index + item.name}
                    item={item}
                    basket={basket}
                    setBasket={setBasket}
                    index={index}
                  />
                );
              })}
            </div>
            <p className="totaux">
              <span>Sous-total</span>
              <span>{calcSousTotal() + "€"}</span>
            </p>
            <p className="totaux">
              <span>Frais de livraison</span>
              <span>2.50 €</span>
            </p>
            <p className="totaux">
              <span>Total</span>
              <span>{calcTotal() + " €"}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="empty">Votre panier est vide</div>
      )}
    </aside>
  );
};

export default Basket;
