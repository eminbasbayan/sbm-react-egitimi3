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

  function deleteFromCart(cartId) {
    const filteredCartItems = cartItems.filter((item) => item.id !== cartId);
    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        name: "Emin",
        surname: "Başbayan",
        cartItems,
        addToCart,
        deleteFromCart,
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
