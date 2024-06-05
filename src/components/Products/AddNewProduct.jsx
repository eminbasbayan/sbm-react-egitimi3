import "./AddNewProduct.css";
import Button from "../UI/Button";

function AddNewProduct() {
  return (
    <form className="product-form">
      <div className="product-input">
        <label>Title</label>
        <input type="text" placeholder="Ürün ismi giriniz." />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input type="text" placeholder="Ürün görseli giriniz." />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input type="text" placeholder="Ürün açıklaması giriniz." />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input type="number" placeholder="Ürün fiyatı giriniz." />
      </div>
      <Button size="sm" color="success">Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddNewProduct;
