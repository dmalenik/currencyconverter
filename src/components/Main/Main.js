import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComponent from "./FormComponent";

const Main = () => {
  return (
    <>
      <Row className={"mb-3 align-items-center"}>
        <Col>
          <FormComponent />
        </Col>
      </Row>
    </>
  );
};

export default Main;
