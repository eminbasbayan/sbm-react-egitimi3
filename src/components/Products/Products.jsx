import {useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import Spinner from "../UI/Spinner";
import useFethData from "../../hooks/FetchData";

import "./Products.css";

function Products() {
  const {
    data: products,
    isLoading,
    error,
    setData: setProducts,
  } = useFethData("https://fakestoreapi.com/products/");

  const [isShowModal, setIsShowModal] = useState(false);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  }

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
      <div className="d-inline-flex flex-column align-items-start gap-4">
        {isLoading && <Spinner />}
        {error && <strong>Error loading data!</strong>}
        <div className="products">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
