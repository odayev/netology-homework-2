import { useState } from "react";
import CartItem from "./components/CartItem/CartItem";
import IconSwitch from "./components/IconSwitch/IconSwitch";

const App = ({ products }) => {

  const [isActive, setIsActive] = useState(true);


  const handleClick = () => {
    console.log("handleclick")
  }

  if (isActive) {
    return (
      <div className="container">
        <div className="shopList">
          
          <IconSwitch icon={"view_list"} onClick={handleClick} />

          <div className="cartList">
            {products.map((product) => (
              <CartItem
                key={product.id}
                name={product.name}
                price={product.price}
                color={product.color}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="shopList">
        
          <IconSwitch icon={"view_module"} onClick={handleClick}/>

          <div className="cartList2">
            {products.map((product) => (
              <CartItem
                key={product.id}
                name={product.name}
                price={product.price}
                color={product.color}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default App;
