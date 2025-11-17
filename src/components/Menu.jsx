import Category from "./Category";

const Menu = ({ categories }) => {
  return (
    <div className="menu">
      {categories.map((element, index) => {
        if (element.meals.length > 0) {
          return <Category key={element.name + index} category={element} />;
        }
      })}
    </div>
  );
};

export default Menu;
