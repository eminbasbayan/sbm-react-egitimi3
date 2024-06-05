import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt="product title" />
      </div>
      <div className="product-info">
        <strong>{props.title}</strong>
        <span>{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
