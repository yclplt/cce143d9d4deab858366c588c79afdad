import React from "react";
import { Button as AndButton } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";
import ButtonProps from "./props";

const Button = ({
  size,
  color,
  label,
  disabled,
  variant,
  position,
  ...props
}) => {
  const btnClassName = classNames({
    "hepsi-button": true,
    [color]: color,
    [position]: position,
  });

  return (
    <AndButton
      size={size}
      className={btnClassName}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {label}
    </AndButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf([
    ButtonProps.size.small,
    ButtonProps.size.medium,
    ButtonProps.size.large,
  ]),
  position: PropTypes.oneOf([
    ButtonProps.position.left,
    ButtonProps.position.right,
  ]),
  type: PropTypes.oneOf([
    ButtonProps.type.primary,
    ButtonProps.type.dashed,
    ButtonProps.type.text,
    ButtonProps.type.link,
  ]),
  color: PropTypes.oneOf([
    ButtonProps.color.primary,
    ButtonProps.color.secondary,
  ]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
Button.defaultProps = {
  size: ButtonProps.size.medium,
  position: ButtonProps.position.right,
  type: ButtonProps.type.primary,
  color: ButtonProps.color.primary,
  disabled: false,
};

export default Button;
