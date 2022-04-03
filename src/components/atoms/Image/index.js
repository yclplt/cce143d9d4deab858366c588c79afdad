import React from "react";
import { Image as AndImage } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";
import ImageProps from "./props";

const Image = ({ size, position, onChange, ...props }) => {
  const pgnClassName = classNames({
    "hepsi-image": true,
    [position]: position,
  });

  return <AndImage size={size} className={pgnClassName} {...props} />;
};

Image.propTypes = {
  size: PropTypes.oneOf([
    ImageProps.size.small,
    ImageProps.size.medium,
    ImageProps.size.large,
  ]),
  position: PropTypes.oneOf([
    ImageProps.position.left,
    ImageProps.position.right,
  ]),
  alt: PropTypes.string,
};

Image.defaultProps = {
  size: ImageProps.size.medium,
  position: ImageProps.position.right,
  alt: "image",
};

export default Image;
