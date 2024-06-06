import Products from "./components/Products/Products";
import { ToastContainer } from "react-toastify";
import Header from "./components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app container">
      <Header cartItems={cartItems} />
      <br />
      <Products setCartItems={setCartItems} />
      <ToastContainer />
    </div>
  );
}

export default App;
