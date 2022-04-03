import React from "react";
import { Empty as AndEmpty } from "antd";
import classNames from "classnames";

const Empty = ({ size, position, label, ...props }) => {
  const emptyClassName = classNames({
    "hepsi-empty": true,
  });

  return <AndEmpty className={emptyClassName} {...props} />;
};

export default Empty;
