import defaultMeal from "../../assets/default-meal.jpg";
import Basket from "../Basket/Basket";
import "./meal.css";

const Meal = ({ meal, basket, setBasket }) => {
  // cette fonction permet de couper la chaine de caractères si celle-ci fait plus de 58 caractères :
  const cropedString = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i < 58) {
        newStr += str[i];
      } else {
        // si jamais les caractères au-delà de 58 ne sont pas des espaces, on les rajoutent quand même
        // ceci afin de ne pas couper les mots
        if (str[i] === " ") {
          return newStr + " ...";
        } else {
          newStr += str[i];
        }
      }
    }
    return newStr;
  };

  const handleClick = () => {
    const copy = [...basket];
    let exist = false;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].name === meal.title) {
        exist = true;
        copy[i].number++;
      }
    }
    if (!exist) {
      copy.push({ name: meal.title, price: meal.price, number: 1 });
    }
    setBasket(copy);
  };
  return (
    <article onClick={handleClick}>
      <div>
        <h3>{meal.title}</h3>
        <p>{cropedString(meal.description)}</p>
        <div>
          <p>{meal.price + " €"}</p>
          {meal.popular && <p className="popular">✦ Popular</p>}
        </div>
      </div>
      {meal.picture ? (
        <img src={meal.picture} alt="meal appétissant" />
      ) : (
        <img src={defaultMeal} alt="meal appétissant" />
      )}
    </article>
  );
};

export default Meal;
