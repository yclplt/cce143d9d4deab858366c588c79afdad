import "./styles.css";
import PropTypes from "prop-types";
import { notification } from "antd";
import AlertProps from "./props";

const Alert = ({ title, description, type, placement, duration, onClose }) => {
  notification[type]({
    message: title,
    description,
    placement,
    duration,
    onClose,
  });
  return notification[type];
};

Alert.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    AlertProps.type.success,
    AlertProps.type.error,
    AlertProps.type.info,
    AlertProps.type.warning,
  ]),
  placement: PropTypes.oneOf([
    AlertProps.placement.bottomLeft,
    AlertProps.placement.bottomRight,
    AlertProps.placement.topLeft,
    AlertProps.placement.topRight,
    AlertProps.placement.top,
  ]),
  duration: PropTypes.number,
};
Alert.defaultProps = {
  duration: 0,
  placement: AlertProps.placement.top,
};

export default Alert;
