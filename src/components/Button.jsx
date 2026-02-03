import React from "react";
import { MdTitle } from "react-icons/md";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
