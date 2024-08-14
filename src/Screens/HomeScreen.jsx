import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../Actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../Components/Paginate";
import ProductCarousel from "../Components/ProductCarosuel";

function HomeScreen() {
  const { keyword } = useParams();
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  // Fetching data from the server using use effect hook
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
    </>
  );
}

export default HomeScreen;
