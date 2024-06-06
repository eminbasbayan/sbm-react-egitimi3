import Products from "./components/Products/Products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app container pt-4">
      <Counter />
      <br />
      <br />
      <br />
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
