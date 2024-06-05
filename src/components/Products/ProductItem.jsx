import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

/* 
1- state değişirse component güncellenir.
2- props değişirse component re-render olur.
*/

function ProductItem(props) {
  const [titleState, setTitleState] = useState("Title");
  const { image, title, price, description } = props;

  function handleTitleChange() {
    setTitleState(title);
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong>{titleState}</strong>
        <span>{price}₺</span>
        <span className="product-desc">{description}</span>
        <Button
          color="primary"
          size="sm"
          onClick={() => handleTitleChange("my data")}
        >
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
};

export default ProductItem;
