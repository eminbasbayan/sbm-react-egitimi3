import Products from "./components/Products/Products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app container pt-4">
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
