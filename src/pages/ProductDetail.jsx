import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/UI/Button";
import { DUMMY_PRODUCTS } from "./Products";

export const ProductDetail = () => {
  const params = useParams();

  const productId = params.productId;
  console.log(productId);
  const currentProduct = DUMMY_PRODUCTS.find(
    (product) => product.id === productId
  );

  return (
    <StyledBoxCarts key={currentProduct.id}>
      <StyledImg src={currentProduct.image} alt="iphone 14" />
      <StyledDiv>
        <Button />
        <StyledHTwo>{currentProduct.title}</StyledHTwo>
        <StyledHFour>{currentProduct.price}com</StyledHFour>
        <StyledText>
          iPhone is a line of smartphones produced by Apple Inc. that use
          Apple's own iOS mobile operating system. The first-generation iPhone
          was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
          then, Apple has annually released new iPhone models and iOS updates.
          As of November 1, 2018, more than 2.2 billion iPhones had been sold.
        </StyledText>
      </StyledDiv>
      <Outlet />
    </StyledBoxCarts>
  );
};
const StyledImg = styled("img")`
  width: 400px;
  height: 500px;
`;
const StyledBoxCarts = styled("div")`
  width: 1100px;
  height: 500px;
  background-color: white;
  display: flex;
  margin-top: 30px;
`;
const StyledDiv = styled('div')`
  margin-top: 30px;
`
const StyledHTwo = styled('h2')`
  margin-top: 20px;
`
const StyledHFour = styled('h3')`
  margin-top: 15px;
`
const StyledText = styled('p')`
  margin-top: 15px;
`