import "./AddNewProduct.css";
import Button from "../UI/Button";
import { useState } from "react";

function AddNewProduct() {
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

  console.log(productData);

  return (
    <form className="product-form">
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

export default AddNewProduct;
