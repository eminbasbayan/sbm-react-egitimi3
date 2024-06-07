import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

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
          loader: async () => {
            try {
              const res = await fetch("https://fakestoreapi.com/products/");
              const data = res.json();

              if (res.ok) {
                return data;
              } else {
                throw new Error("Failed to fetch products");
              }
            } catch (err) {
              console.log(err);
            }
          },
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetailsPage />,
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
