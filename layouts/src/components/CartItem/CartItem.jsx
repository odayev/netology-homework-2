import "./cartItem.css";
//import "./cartItem2.css";
import Button from "../Button/Button";





const CartItem = ({ name, color, price, img }) => {
  return (
    <div className="cartItem">
      <div
        className="cartImage"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <h2>{name}</h2>
        <p>{color}</p>
        <div className="info">
          <div className="price">{price}</div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CartItem;



