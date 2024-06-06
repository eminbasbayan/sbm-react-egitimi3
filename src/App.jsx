import Products from "./components/Products/Products";
import { ToastContainer } from "react-toastify";
import Header from "./components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app container">
      <Header />
      <br />
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
