import React from "react";
import { Pagination as AndPagination } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.css";
import PaginationProps from "./props";

const Pagination = ({
  size,
  color,
  label,
  disabled,
  position,
  onChange,
  ...props
}) => {
  const pgnClassName = classNames({
    "hepsi-pagination": true,
    [color]: color,
    [position]: position,
  });

  return (
    <AndPagination
      size={size}
      className={pgnClassName}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

Pagination.propTypes = {
  size: PropTypes.oneOf([
    PaginationProps.size.small,
    PaginationProps.size.medium,
    PaginationProps.size.large,
  ]),
  position: PropTypes.oneOf([
    PaginationProps.position.left,
    PaginationProps.position.right,
  ]),
  color: PropTypes.oneOf([
    PaginationProps.color.primary,
    PaginationProps.color.secondary,
  ]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
Pagination.defaultProps = {
  size: PaginationProps.size.medium,
  position: PaginationProps.position.right,
  color: PaginationProps.color.primary,
  disabled: false,
};

export default Pagination;
