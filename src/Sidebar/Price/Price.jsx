import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        {/*隱藏原生radio 自訂勾選框 文字標籤*/}
        <input onChange={handleChange} type="radio" value="" name="price" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="0~50"
        title="$0-50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="51~100"
        title="$51-100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="101~150"
        title="$101-150"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="151~"
        title="Over 150"
        name="price"
      />
    </div>
  );
};

export default Price;
