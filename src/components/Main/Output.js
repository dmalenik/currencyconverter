import React from "react";

const Output = ({ result, style, outputStyles }) => {
  let showResult = () => {
    let formattedResult = Number(result);
    if (formattedResult) {
      return `It is ${formattedResult} PLN`;
    }
    return "Enter the values to see the result";
  };
  return (
    <>
      <p className={outputStyles} style={style}>
        {showResult()}
      </p>
    </>
  );
};

export default Output;
