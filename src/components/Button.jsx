import React from "react";

const Button = (props) => {
  const { className, label, handleClick } = props;
  return (
    <button className={className} onClick={(e) => handleClick(e)}>
      {label}
    </button>
  );
};

export default Button;
