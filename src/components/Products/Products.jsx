import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import { productsData } from "../../productsData";
import "./Products.css";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="products-wrapper">
      <AddNewProduct
        productsData={productsData}
        setProducts={setProducts}
      />
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
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
