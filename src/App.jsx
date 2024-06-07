import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <div className="app container">
      <RouterProvider router={router} />

      <ToastContainer />
    </div>
  );
}

export default App;
