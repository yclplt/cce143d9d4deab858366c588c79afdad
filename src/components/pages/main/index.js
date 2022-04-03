import React, { useEffect, useState } from "react";
import { Header, ProductList } from "../../index";
import { Row, Col } from "antd";
import { callAPI, callApiGet } from "../../../utils/axios.js";

export default function Main() {
  const [productsList, setProductsList] = useState(null);
  const [productsListFilter, setProductsListFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [statusSearch, setStatusSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const PER_PAGE = 12;

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    await callAPI(
      callApiGet,
      { url: "/functions/products" },
      {},
      async (res) => {
        setProductsList(res?.data?.products);
        setTotalCount(res?.data?.products?.length);
        setProductsListFilter(res?.data?.products?.slice(0, PER_PAGE));
      },
      true
    );
  }

  const onPaginationChange = (page) => {
    setCurrentPage(page);

    if (productsList?.length > 0 && !statusSearch) {
      const indexOfLastProduct = page * PER_PAGE;
      const indexOfFirstProduct = indexOfLastProduct - PER_PAGE;
      const currentProduct = productsList?.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      setProductsListFilter(currentProduct);
    }

    if (searchData?.length > 0 && statusSearch) {
      const indexOfLastProduct = page * PER_PAGE;
      const indexOfFirstProduct = indexOfLastProduct - PER_PAGE;
      const currentProduct = searchData?.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      setProductsListFilter(currentProduct);
    }
  };

  const onSearch = (text) => {
    if (text) {
      setStatusSearch(true);
      const filterData = [...productsList];
      const filterProducts = filterData.filter((filter) =>
        filter.title.includes(text)
      );
      setSearchData(filterProducts);
      setProductsListFilter(filterProducts.slice(0, PER_PAGE));
      setTotalCount(filterProducts?.length);
    } else {
      setSearchData([]);
      setStatusSearch(false);
      setProductsListFilter(productsList.slice(0, PER_PAGE));
      setTotalCount(productsList?.length);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Row justify="center">
        <Col xs={23} md={20}>
          <Header label="Products" />
          <Row justify="center">
            <Col xs={24} md={24} lg={24}>
              <ProductList
                data={productsListFilter}
                onPaginationChange={onPaginationChange}
                onSearch={onSearch}
                totalCount={totalCount}
                page={currentPage}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
