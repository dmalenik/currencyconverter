import React from "react";
import Image from "react-bootstrap/Image";

const Logo = ({ src, alt, copyright, txtCopyright, logoStyles }) => {
  return (
    <>
      <Image src={src} alt={alt} className={logoStyles} />
      <div>
        <a href={copyright}>{txtCopyright}</a>
      </div>
    </>
  );
};

export default Logo;
