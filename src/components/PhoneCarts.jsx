import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import { ProductDetail } from "../pages/ProductDetail"

export const PhoneCarts = ({ phone }) => {
    const navigate = useNavigate()
    const clickHandler = (phoneId) => {
        navigate(`/products/${phoneId}`)
    }
  return (
    <>
      <StyledPhoneCart  onClick={() => clickHandler(phone.id)}>
        <div>
          <StyledImage src={phone.image} alt="iphone" />
          <h3>{phone.title}</h3>
          <h3>{phone.price}</h3>
        </div>
        <Outlet/>
      </StyledPhoneCart>
    </>
  );
};
const StyledImage = styled("img")`
  width: 370px;
  height: 500px;
`;
const StyledPhoneCart = styled("div")`
  box-sizing: border-box;
  overflow: hidden;
  width: 400px;
  background-color: white;
  padding: 15px;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
`;
