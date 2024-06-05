import PropTypes from "prop-types";
import "./Button.css";

function Button({ color, size, children, onClick }) {
  const colorClasses = `btn-${color}`;
  const sizeClasses = `btn-${size}`;
  const classNames = `btn ${colorClasses} ${sizeClasses}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
