import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <h2>Products</h2>
      <div className="products">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default Products;
