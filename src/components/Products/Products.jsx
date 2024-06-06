import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import { productsData } from "../../productsData";
import Modal from "../UI/Modal";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="products-wrapper">
      <AddNewProduct
        setProducts={setProducts}
        setIsShowModal={setIsShowModal}
      />
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title="Form Hatası!"
          description="Tüm inputlar dolu olmalı."
        />
      )}
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
