import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import ProductInput from "./ProductInput";

import "./AddNewProduct.css";

const productInputs = [
  {
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Ürün ismi giriniz.",
  },
  {
    label: "Image",
    type: "text",
    name: "image",
    placeholder: "Ürün görseli giriniz.",
  },
  {
    label: "Description",
    type: "text",
    name: "description",
    placeholder: "Ürün açıklaması giriniz.",
  },
  {
    label: "Price",
    type: "number",
    name: "price",
    placeholder: "Ürün fiyatı giriniz.",
  },
];

const initialState = {
  title: "",
  image: "",
  description: "",
  price: "",
};

function AddNewProduct(props) {
  const { setProducts, setIsShowModal } = props;
  const [productData, setProductData] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setProductData({
      ...productData,
      // computed properties
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(productData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }

    const newProduct = {
      id: Math.random(),
      ...productData,
      price: Number(productData.price),
    };
    setProducts((products) => [newProduct, ...products]);

    // clear form inputs
    setProductData(initialState);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          {...input}
          onChange={handleChange}
          value={productData[input.name]}
        />
      ))}
      <Button size="sm" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  productsData: PropTypes.array,
  setProducts: PropTypes.func,
  setIsShowModal: PropTypes.func,
};

export default AddNewProduct;
