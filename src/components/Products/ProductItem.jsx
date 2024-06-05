import "./ProductItem.css";

function ProductItem() {
  const image =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  const title = "Tişört";
  const price = 200;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product title" />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
