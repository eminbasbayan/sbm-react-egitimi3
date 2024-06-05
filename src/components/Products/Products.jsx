import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
 
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <h2>Products</h2>
      <div className="products">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
