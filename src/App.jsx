import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return (
    <div className="app container">
      <Header />

      <RouterProvider router={router} />

      <ToastContainer />
    </div>
  );
}

export default App;
