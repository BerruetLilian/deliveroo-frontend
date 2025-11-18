import "./category.css";

import Meal from "../Meal/Meal";

const Category = ({ category, basket, setBasket }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <menu>
        {category.meals.map((meal) => {
          // console.log(meal);
          // {
          //     "id": "1519055545-98",
          //     "url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
          //     "title": "Croissant bio",
          //     "description": "",
          //     "price": "6.60",
          //     "picture": "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg"
          // }
          return (
            <Meal
              meal={meal}
              key={meal.id}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </menu>
    </div>
  );
};

export default Category;
