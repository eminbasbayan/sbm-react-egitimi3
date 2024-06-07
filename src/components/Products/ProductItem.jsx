import PropTypes from "prop-types";
import Button from "../UI/Button";

import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductItem(props) {
  const {
    id,
    image,
    title,
    price,
    description,
    quantity,
    handleDeleteItem,
    cart,
  } = props;

  const navigate = useNavigate();
  const product = {
    id,
    image,
    title,
    price,
    description,
    quantity: 1,
  };
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate(`/product/${id}`)}
        >
          {title}
        </strong>
        <span>
          {price}₺ {cart && `x ${quantity}`}{" "}
        </span>
        <span className="product-desc">{description}</span>
        {!cart && (
          <Button
            color="primary"
            size="sm"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </Button>
        )}

        <Button
          color="danger"
          size="sm"
          onClick={() =>
            cart ? dispatch(removeFromCart(id)) : handleDeleteItem(id)
          }
        >
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
  cart: PropTypes.bool,
  quantity: PropTypes.number,
};

export default ProductItem;
