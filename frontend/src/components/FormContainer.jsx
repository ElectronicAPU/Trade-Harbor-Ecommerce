import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <>
      <Container className="justify-content-md-center">
        <Row>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormContainer;
