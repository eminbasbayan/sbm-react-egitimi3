// import Products from "./components/Products/Products";

import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Button size="xl" color="primary">Add To Cart</Button>
      <Button size="lg" color="success">Update</Button>
      <Button size="sm" color="danger">Delete</Button>
      {/* <Products /> */}
    </div>
  );
}

export default App;
