import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

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
    const newProduct = {
      id: Math.random(),
      ...productData,
      price: Number(productData.price),
    };
    setProducts((products) => [newProduct, ...products]);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} onChange={handleChange} />
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
};

export default AddNewProduct;
