import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);


  function addToCart(product) {
    const findCartItem = cartItems.find((item) => item.id === product.id);
    if (findCartItem) {
      setCartItems(
        cartItems.map((cart) => {
          if (cart.id === findCartItem.id) {
            return {
              ...cart,
              quantity: findCartItem.quantity + 1,
            };
          }
          return cart;
        })
      );
      return;
    }
    setCartItems([product, ...cartItems]);
  }

  return (
    <CartContext.Provider
      value={{
        name: "Emin",
        surname: "Başbayan",
        cartItems,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
