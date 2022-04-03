import React from "react";
import "./styles.css";
import { Select as AntdSelect } from "antd";
import PropTypes from "prop-types";
import SelectProps from "./props";

const classNames = require("classnames");
const { Option } = AntdSelect;

const Select = ({
  options,
  optionValKey,
  position,
  optionLabelKey,
  size,
  value,
  placeholder,
  allowClear = true,
  ...props
}) => {
  const className = classNames({
    "hepsi-select": true,
    [position]: position,
    [size]: size,
  });
  const allProps = { className, ...props };

  return (
    <AntdSelect
      allowClear={allowClear}
      {...allProps}
      placeholder={placeholder ?? "Please Select"}
      maxTagCount={0}
      value={value}
      filterOption={(input, option) =>
        option.children &&
        option.children
          .toLocaleLowerCase()
          .indexOf(input.toLocaleLowerCase()) >= 0
      }
    >
      {options &&
        options?.map((val, index) => {
          let label = val[optionLabelKey];
          let optionProps = { key: index, value: val[optionValKey] };
          if (val.title) optionProps.title = val.title;
          if (val.disabled) optionProps.disabled = val.disabled;
          return <Option {...optionProps}>{label}</Option>;
        })}
    </AntdSelect>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  size: PropTypes.oneOf([
    SelectProps.size.sm,
    SelectProps.size.default,
    SelectProps.size.md,
    SelectProps.size.lg,
    SelectProps.size.auto,
    SelectProps.size.xl,
  ]),
  position: PropTypes.oneOf([
    SelectProps.position.center,
    SelectProps.position.left,
    SelectProps.position.right,
  ]),
  optionValKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  showSearch: PropTypes.bool,
};
Select.defaultProps = {
  size: SelectProps.size.default,
  optionValKey: "value",
  optionLabelKey: "label",
  showSearch: true,
  position: SelectProps.position.left,
};

export default Select;
