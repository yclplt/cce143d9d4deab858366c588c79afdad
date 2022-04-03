import React from "react";
import "./styles.css";
import { Input as AntdInput } from "antd";
import PropTypes from "prop-types";
import InputProps from "./props";

const classNames = require("classnames");

const Input = ({ type, position, size, placeholder, ...props }) => {
  const className = classNames({
    "hepsi-input": true,
    [position]: position,
    [size]: size,
  });
  const allProps = { ...props };

  return (
    <div className={className}>
      {type === InputProps.type.text && (
        <AntdInput {...allProps} autoComplete="off" />
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    InputProps.type.text,
    InputProps.type.number,
    InputProps.type.textarea,
    InputProps.type.search,
    InputProps.type.password,
  ]),
  size: PropTypes.oneOf([
    InputProps.size.small,
    InputProps.size.default,
    InputProps.size.large,
  ]),
};
Input.defaultProps = {
  type: InputProps.type.text,
  size: InputProps.size.default,
};

export default Input;
