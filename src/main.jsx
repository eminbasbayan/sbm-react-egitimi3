import ReactDOM from "react-dom/client";

import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
