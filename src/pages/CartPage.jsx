import ProductItem from "../components/Products/ProductItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((state)=> state.cart);
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
