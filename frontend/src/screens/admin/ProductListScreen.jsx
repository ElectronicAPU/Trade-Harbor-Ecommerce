import React from "react";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const deleteHandler = (id) => {
    console.log(`Delete ${id}`);
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3">
            <FaEdit /> Create Product
          </Button>
        </Col>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error?.message}
          </Message>
        ) : (
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button
                        variant="light"
                        type="button"
                        className="btn-sm mx-2"
                      >
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      type="button"
                      className="btn-sm mx-2"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Row>
    </>
  );
};

export default ProductListScreen;
