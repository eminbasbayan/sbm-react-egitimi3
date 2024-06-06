import PropTypes from "prop-types";
import { CartContext } from "./CreateContext";

const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        name: "Emin",
        surname: "Başbayan",
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
