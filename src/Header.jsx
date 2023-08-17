import { Route, Routes, NavLink } from "react-router-dom";
import React from "react";
import { styled } from "styled-components";
import { Cart } from "./pages/Cart";
import { Orders } from "./pages/Orders";
import { Products } from "./pages/Products";
import { Main } from "./pages/Main";
import { ProductDetail } from "./pages/ProductDetail";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>iStore</h1>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/"></Link>
          <Link
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "lightBlue",
                };
              }
            }}
            to="/products"
          >
            Products
          </Link>
          <Link
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "lightBlue",
                };
              }
            }}
            to="/cart"
          >
            My Cart
          </Link>
          <Link
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "lightBlue",
                };
              }
            }}
            to="/orders"
          >
            Orders
          </Link>
        </nav>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

const StyledHeader = styled("header")`
  width: 100%;
  height: 70px;
  background-color: #6a6ade;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & > h1 {
    color: white;
  }
  /* & > ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
  & > ul > li {
    font-size: 20px;
    margin-left: 40px;
  } */
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;
