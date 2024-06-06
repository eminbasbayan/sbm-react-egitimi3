import PropTypes from "prop-types";

function ProductInput(props) {
  const { label, type, name, placeholder, onChange } = props;
  return (
    <div className="product-input">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

ProductInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductInput;
