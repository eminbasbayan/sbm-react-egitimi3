import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

/* 
1- state değişirse component güncellenir.
2- props değişirse component re-render olur.
*/

function ProductItem(props) {
  const { image, title, price, description, handleTitleChange } = props;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <span className="product-desc">{description}</span>
        <Button color="primary" size="sm" onClick={handleTitleChange}>
          Title Change!
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default ProductItem;
