import React from "react";
import "./sidebar.css";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <FaShoppingCart />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
