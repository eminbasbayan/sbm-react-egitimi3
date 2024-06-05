import "./AddNewProduct.css";
import Button from "../UI/Button";
import { useState } from "react";

function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handleDescChange(event) {
    setDescription(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  console.log({
    title,
    image,
    description,
    price,
  });

  return (
    <form className="product-form">
      <div className="product-input">
        <label>Title</label>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Ürün ismi giriniz."
        />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input
          type="text"
          onChange={handleImageChange}
          placeholder="Ürün görseli giriniz."
        />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input
          type="text"
          onChange={handleDescChange}
          placeholder="Ürün açıklaması giriniz."
        />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input
          type="number"
          onChange={handlePriceChange}
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
