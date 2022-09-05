import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Aboutus from "./Aboutus";
import Medura from "./Medura";
// import link from react-dom
import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";
import Cart_product from "./Cart_product";
import { useSelector } from "react-redux";

const Nevi_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1) {
    cursor: pointer;
  }

  > div:nth-child(2) {
    display: flex;
    gap: 50px;
    align-items: center;
    > h4 {
      cursor: pointer;
    }
  }
`;

const Routes_file = () => {
  const cart_products = useSelector((store) => store.cart);
  const navigate = useNavigate();
  let total = 0;

  return (
    <>
      <Nevi_div>
        <div>
          <h3
            onClick={() => {
              navigate("/");
            }}
          >
            Medura
          </h3>
        </div>
        <div>
          <h4
            onClick={() => {
              navigate("/Medura/About_us");
            }}
          >
            About us
          </h4>
          <h4
            onClick={() => {
              navigate("/Medura/Products");
            }}
          >
            Furniture
          </h4>
          <h4
            onClick={() => {
              navigate("/Medura/Contect_us");
            }}
          >
            Contect Us
          </h4>
          <h4
            onClick={() => {
              navigate("/Medura/FAQ");
            }}
          >
            FAQ
          </h4>
          <div>
            <img
              onClick={() => {
                navigate("/Medura/Login");
              }}
              width="30px"
              src={require("./Public/profile.png")}
              alt=""
            />
          </div>
          <div className="Cart">
            <div className="Cart_data">
              {cart_products &&
                cart_products.map((el) => {
                  total += el.price;
                  return <Cart_product key={el.id} product={el} />;
                })}
              {cart_products && cart_products.length !== 0 ? (
                <div className="Cart_Total_div">
                  <h2>Total : £{total}</h2>
                  <button>Check Out</button>
                </div>
              ) : (
                <h4>No products in the cart.</h4>
              )}
            </div>
          </div>
        </div>
      </Nevi_div>
    </>
  );
};

export default Routes_file;
