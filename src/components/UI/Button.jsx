import PropTypes from "prop-types";
import "./Button.css";

function Button({ color, size, children }) {
  const colorClasses = `btn-${color}`;
  const sizeClasses = `btn-${size}`;
  const classNames = `btn ${colorClasses} ${sizeClasses}`;

  console.log(children);

  return <button className={classNames}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
};

export default Button;
