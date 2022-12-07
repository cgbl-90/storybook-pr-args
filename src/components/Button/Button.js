import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { label, style } = props;
  return <button className={`btn ${style}`}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string,
};

export default Button;
