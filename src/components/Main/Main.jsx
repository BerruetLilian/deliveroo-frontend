import "./main.css";
import Category from "../Category/Category";
import Basket from "../Basket/Basket";
import { useState } from "react";

const Main = ({ categories }) => {
  //   console.log("ici =>", category);
  const [basket, setBasket] = useState([]);
  return (
    <main>
      <div className="container">
        <section className="menu">
          {categories.map((category, index) => {
            // console.log(category); // {name: 'Tartines froides', meals: Array(5)}

            // on retourne la categorie que si la clef "meals" renvoie un tableau dont la longueur est supérieure à 0
            return (
              category.meals.length > 0 && (
                <Category
                  category={category}
                  key={index}
                  basket={basket}
                  setBasket={setBasket}
                />
              )
            );
          })}
        </section>
        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </main>
  );
};

export default Main;
