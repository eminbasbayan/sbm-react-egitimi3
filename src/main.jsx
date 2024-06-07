import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import CartProvider from "./context/CartProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CartProvider>
);
