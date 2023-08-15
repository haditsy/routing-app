import React from "react";
import { styled } from "styled-components";

export const PhoneCarts = ({phone}) => {
  return (
    <StyledPhoneCart>
      <div key={phone.id}>
        <StyledImage src={phone.image} alt="iphone" />
        <h3>{phone.title}</h3>
        <h3>{phone.price}</h3>
      </div>
    </StyledPhoneCart>
  );
};
const StyledImage = styled('img')`
    width: 370px;
    height: 500px;
`
const StyledPhoneCart = styled('div')`
    box-sizing: border-box;
    overflow: hidden;
    width: 400px;
    background-color: white;
    padding: 15px;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
`