import PropTypes from "prop-types";

function ProductInput(props) {
  const { label, type, name, placeholder, onChange, value } = props;
  return (
    <div className="product-input">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
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
  value: PropTypes.string.isRequired,
};

export default ProductInput;
