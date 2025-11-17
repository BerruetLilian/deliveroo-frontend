const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="meals">
        {category.meals.map((element) => {
          return (
            <div className="meal">
              <div className="meal-text">
                <h3>{element.title}</h3>
                <p>{element.description}</p>
                <div className="meal-infos">
                  <span>{element.price} €</span>
                  <span>{element.popular && "Populaire"}</span>
                </div>
              </div>
              {element.picture && <img src={element.picture} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
