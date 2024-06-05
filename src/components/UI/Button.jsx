import PropTypes from "prop-types";
import "./Button.css";

function Button({ color, size, title }) {
  const colorClasses = `btn-${color}`;
  const sizeClasses = `btn-${size}`;
  const classNames = `btn ${colorClasses} ${sizeClasses}`;

  return <button className={classNames}>{title}</button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
};

export default Button;
