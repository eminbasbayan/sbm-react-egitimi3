// import Products from "./components/Products/Products";

import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Button title="Add To Cart" size="xl" color="primary" />
      <Button title="Update" size="lg" color="success" />
      <Button title="Delete" size="sm" color="danger" />
      <Button title="Deneme" size="lg" color="warning" />
      {/* <Products /> */}
    </div>
  );
}

export default App;
