import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";
import Header from "./Header";

const Intro = () => {
  return (
    <>
      <Row className={"mb-3 align-items-center"}>
        <Col>
          <Logo
            src={
              "https://stylemagazines.com.au/wp-content/uploads/2015/08/show-me-the-money-meme.jpg"
            }
            alt={"my logo"}
            copyright={"https://stylemagazines.com.au/"}
            txtCopyright={"Meme was taken from Style"}
            logoStyles={"w-50"}
          />
        </Col>
        <Col>
          <Header
            txt={"Currency counter"}
            headerStyles={"p-3 border border-dark fs-3"}
          />
        </Col>
      </Row>
    </>
  );
};

export default Intro;
