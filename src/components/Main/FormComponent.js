import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Output from "./Output";

const FormComponent = () => {
  // display form and hide spinner
  let [spinnerDisplayed, setSpinnerDisplayed] = useState(true);
  setTimeout(() => {
    setSpinnerDisplayed(false);
  }, 3000);
  // request the data from the API
  let [data, setData] = useState([]);
  let findAPICurrencies = (data) => {
    if (!data) return;
    let { rates } = data[0];
    let USD = rates.find((rate) => {
      return rate.code == "USD";
    });
    let EUR = rates.find((rate) => {
      return rate.code == "EUR";
    });
    let CHF = rates.find((rate) => {
      return rate.code == "CHF";
    });
    return setData([USD, EUR, CHF]);
  };
  useEffect(async () => {
    let api = "https://api.nbp.pl/api/exchangerates/tables/a/";
    let res = await fetch(api);
    let data = await res.json();
    findAPICurrencies(data);
  }, []);
  // update the state for the formControl
  let [formControlValue, setFormControlValue] = useState("");
  let handleFormControlValue = (e) => {
    setFormControlValue(e.target.value);
  };
  // update the state for the currencies list
  let [formSelectValue, setFormSelectValue] = useState("");
  let handleFormSelectValue = (e) => {
    setFormSelectValue(e.target.value);
  };
  // validate if the form is filled
  let [validated, setValidated] = useState(false);
  let handleSubmit = (e) => {
    let form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
  };
  // make calculations on the button click
  let [exchange, setExchange] = useState("");
  let handleClick = () => {
    setExchange(Number(formControlValue * formSelectValue).toFixed(2));
  };
  return (
    <>
      <Row>
        <Col>
          <Form
            className={"justify-content-between"}
            style={{ display: spinnerDisplayed ? "none" : "flex" }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Form.Control
              required
              type={"number"}
              placeholder={"Enter a number"}
              className={"py-3 border border-dark"}
              style={{ width: "40%" }}
              action="#"
              value={formControlValue}
              onChange={handleFormControlValue}
            />
            <Form.Select
              required
              aria-label="select options"
              className={"py-3 border border-dark fw-bold"}
              style={{ width: "25%" }}
              value={formSelectValue}
              onChange={handleFormSelectValue}>
              <option value=""></option>
              {data.map((currency, key) => {
                return (
                  <option key={key} value={currency.mid}>
                    {currency.code}
                  </option>
                );
              })}
            </Form.Select>
            <Button
              type="submit"
              variant="outline-dark"
              style={{ width: "15%" }}
              className={"py-3 fw-bold"}
              onClick={handleClick}>
              Count
            </Button>
          </Form>
          <Spinner
            animation="border"
            variant="dark"
            style={{ display: spinnerDisplayed ? "block" : "none" }}
          />
        </Col>
        <Col className={"d-flex align-items-center"}>
          <Output
            result={exchange}
            outputStyles={"fs-5 mb-0"}
            style={{ display: spinnerDisplayed ? "none" : "block" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default FormComponent;
