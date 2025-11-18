import "./item.css";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Item = ({ item, basket, setBasket, index }) => {
  const handleMinus = () => {
    if (item.number === 1) {
      const copy = [...basket];
      copy.splice(index, 1);
      setBasket(copy);
    } else {
      const copy = [...basket];
      copy[index].number--;
      setBasket(copy);
    }
  };

  const handlePlus = () => {
    const copy = [...basket];
    copy[index].number++;
    setBasket(copy);
  };

  return (
    <div className="item">
      <div className="counter">
        <CiCircleMinus onClick={handleMinus} />
        {item.number}
        <CiCirclePlus onClick={handlePlus} />
      </div>
      {item.name}
      <span>
        {Number.parseFloat(item.price * item.number).toFixed(2) + " €"}
      </span>
    </div>
  );
};

export default Item;
