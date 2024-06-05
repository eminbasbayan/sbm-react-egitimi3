import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import { useState } from "react";
import "./Products.css";

function Products() {
  const [titleState, setTitleState] = useState("Title");

  function handleTitleChange(params){
    setTitleState(params)
  }

  return (
    <div className="products-wrapper">
      <h2>Products</h2>
      <div className="products">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={titleState}
            price={product.price}
            description={product.description}
            handleTitleChange={handleTitleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
