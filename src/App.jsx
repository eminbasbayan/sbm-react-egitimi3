import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { adminRoutes, mainRoutes } from "./routes/routes";

function App() {
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

  return (
    <div className="app container">
      <RouterProvider router={router} />

      <ToastContainer />
    </div>
  );
}

export default App;
