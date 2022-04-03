import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import LabelProps from "./props";

const classNames = require("classnames");

const Label = ({
  label,
  className,
  position,
  color,
  size,
  weight,
  height,
  transform,
  width,
  visible,
  onClick,
  wrap,
  type,
}) => {
  const compClassName = classNames({
    "hepsi-text": true,
    [position]: position,
    [color]: color,
    [size]: size,
    [weight]: weight,
    [height]: height,
    [transform]: transform,
    [width]: width,
    [visible]: visible,
    [type]: type,
    wrap: wrap && true,
  });

  return (
    <div className={`${compClassName} ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf([
    LabelProps.position.bottom,
    LabelProps.position.top,
    LabelProps.position.left,
    LabelProps.position.right,
  ]),
  size: PropTypes.oneOf([
    LabelProps.size.xs,
    LabelProps.size.sm,
    LabelProps.size.md,
    LabelProps.size.lg,
    LabelProps.size.xl,
  ]),
  color: PropTypes.oneOf([
    LabelProps.color.secondary,
    LabelProps.color.primary,
  ]),
  color: PropTypes.string,
};
Label.defaultProps = {
  position: LabelProps.position.left,
  size: LabelProps.size.lg,
  color: LabelProps.color.primary,
  color: "primary",
  className: "",
};

export default Label;
