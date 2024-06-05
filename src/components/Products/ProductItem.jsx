import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  const { image, title, price, description } = props;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default ProductItem;
