import React from "react";
import { Divider as AndDivider } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";
import DividerProps from "./props";

const Divider = ({ size, position, label, ...props }) => {
  const pgnClassName = classNames({
    "hepsi-divider": true,
    [position]: position,
  });

  return (
    <AndDivider size={size} className={pgnClassName} {...props}>
      {label}
    </AndDivider>
  );
};

Divider.propTypes = {
  position: PropTypes.oneOf([
    DividerProps.position.left,
    DividerProps.position.right,
  ]),
  position: PropTypes.oneOf([
    DividerProps.type.horizontal,
    DividerProps.type.vertical,
  ]),
};

Divider.defaultProps = {
  type: DividerProps.type.horizontal,
};

export default Divider;
