import React, { useEffect, useState } from "react";
import { Header } from "../../index";
import { Row, Col } from "antd";
import { callAPI, callApiGet } from "../../../utils/axios.js";

export default function Main() {
  const [linkList, setLinkList] = useState([]);
  const PER_PAGE = 5;

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    await callAPI(
      callApiGet,
      { url: "/functions/products" },
      {},
      async (res) => {
        console.log("res", res);
      },
      true
    );
  }

  return (
    <>
      <Row justify="center">
        <Col xs={23} md={20}>
          <Header label="Links" />
          <Row justify="center">
            <Col xs={20} md={12} lg={10}>
              sads
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
