import { useContext } from "react";
import ProductItem from "../components/Products/ProductItem";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="products">
        {cartItems.map((item) => (
          <ProductItem cart {...item} key={item.id} />
        ))}
      </div>
      <p>Total: {total.toFixed(2)}₺</p>
    </div>
  );
};

export default CartPage;
