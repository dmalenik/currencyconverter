import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HorizontalLine from "./HorizontalLine";

const Footer = () => {
  return (
    <>
      <Row>
        <Col>
          <HorizontalLine style={{ height: "5px" }} />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
