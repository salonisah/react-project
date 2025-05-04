import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, newcl, icon, path }) => {
  const cl = newcl ? `${newcl} cta-button mt-4` : "cta-button mt-4";
  const pa = path ? `${path}` : "#";
  return (
    <>
      <Link className={cl} to={pa}>
        {text} <i className={icon ? icon : "fa fa-arrow-right smooth"}></i>
      </Link>
    </>
  );
};

export default Button;
