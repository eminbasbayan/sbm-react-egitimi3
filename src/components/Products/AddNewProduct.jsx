import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct(props) {
  const { setProducts } = props;
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    description: "",
    price: 0,
  });

  function handleChange({ target: { name, value } }) {
    setProductData({
      ...productData,
      // computed properties
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setProducts([productData, ...products]);
    // previous state
    setProducts((products) => [productData, ...products]);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="product-input">
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Ürün ismi giriniz."
        />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Ürün görseli giriniz."
        />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input
          type="text"
          onChange={handleChange}
          name="description"
          placeholder="Ürün açıklaması giriniz."
        />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Ürün fiyatı giriniz."
        />
      </div>
      <Button size="sm" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  productsData: PropTypes.array,
  setProducts: PropTypes.func,
};

export default AddNewProduct;
