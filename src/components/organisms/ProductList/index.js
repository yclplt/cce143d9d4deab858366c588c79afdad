import React, { useEffect, useRef, useState } from "react";
import {
  ProductItem,
  Input,
  Select,
  Divider,
  Pagination,
  Empty,
} from "../../index";
import { Row, Col } from "antd";

import "./styles.css";
const ProductList = ({
  onPaginationChange,
  data = [],
  onChangeFilter,
  onSearch,
  onSelect,
  totalCount = 0,
  page = 1,
}) => {
  return (
    <>
      <div className="product-list-head">
        <Input
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="large"
          type="search"
          onSearch={(e) => onSearch(e)}
        />
        {/* {data?.length > 0 && (
          <Select
            size="md"
            optionValKey="value"
            optionLabelKey="name"
            onChange={onChangeFilter}
            placeholder="Order By"
            options={[
              { name: "Name (A - Z)", value: 2 },
              { name: "Name (Z - A)", value: 1 },
            ]}
          />
        )} */}
      </div>
      <Row justify="center" gutter={[16, 16]}>
        {data?.length > 0 ? (
          data?.map((product) => (
            <Col xs={24} md={12} lg={6} sx={{ marginBotton: "5px" }}>
              <ProductItem
                keyValue={`${product?.id}${product?.title}`}
                point={product?.point}
                head={product?.title}
                head2={`${product?.variants?.[0]?.price}`}
                image={product?.images?.[0]?.src}
                onClick={onSelect}
                product={product}
              />
            </Col>
          ))
        ) : (
          <Empty />
        )}
      </Row>
      {totalCount > 0 && (
        <Row justify="center">
          <Pagination
            defaultPageSize={12}
            onChange={onPaginationChange}
            defaultCurrent={1}
            total={totalCount}
            current={page}
          />
        </Row>
      )}
    </>
  );
};

export default ProductList;
