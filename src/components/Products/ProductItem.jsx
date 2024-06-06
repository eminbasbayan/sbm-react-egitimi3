import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

/* 
1- state değişirse component güncellenir.
2- props değişirse component re-render olur.
*/

function ProductItem(props) {
  const { id, image, title, price, description, handleDeleteItem } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <span className="product-desc">{description}</span>
        <Button
          color="primary"
          size="sm"
          onClick={() =>
            addToCart({
              id,
              image,
              title,
              price,
              description,
              quantity: 1,
            })
          }
        >
          Add To Cart
        </Button>
        <Button color="danger" size="sm" onClick={() => handleDeleteItem(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  handleDeleteItem: PropTypes.func,
};

export default ProductItem;
