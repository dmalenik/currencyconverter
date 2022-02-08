import React from "react";

const Header = ({ txt, headerStyles }) => {
  return (
    <>
      <h1 className={headerStyles}>{txt}</h1>
    </>
  );
};

export default Header;
