import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";

import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    setProducts([]);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, []);



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
        <Button onClick={fetchProducts} size="sm" color="primary">
          Fetch Data
        </Button>
        {isLoading && <Spinner />}
        <div className="products">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              handleDeleteItem={handleDeleteItem}
              setCartItems={props.setCartItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
