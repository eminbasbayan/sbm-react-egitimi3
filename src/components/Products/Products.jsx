import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";
import Button from "../UI/Button";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

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
      <Button onClick={fetchProducts} size="sm" color="primary">
        Fetch Data
      </Button>
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
  );
}

export default Products;
