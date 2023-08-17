import React from "react";
import { styled } from "styled-components";
import Button from "../components/UI/Button";

export const Orders = () => {
  return (
    <>
      <StyledOrders>
        <h3>My Orders page</h3>
      </StyledOrders>
      <Button />
    </>
  );
};
const StyledOrders = styled("div")`
  width: 1200px;
  height: 150px;
  margin-top: 30px;
  margin-left: 130px;
  padding: 20px;
  background-color: pink;
`;