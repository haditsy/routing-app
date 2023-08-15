import React from "react";
import { styled } from "styled-components";

export const Cart = () => {
  return (
    <>
      {/* <li>My Cart</li> */}
      <div>
        <StyledCart>
          <h3>My Cart page</h3>
        </StyledCart>
      </div>
    </>
  );
};
const StyledCart = styled("div")`
  width: 1200px;
  height: 150px;
  margin-top: 30px;
  margin-left: 130px;
  padding: 20px;
  background-color: orange;
`;
