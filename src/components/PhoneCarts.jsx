import React from "react";
import { styled } from "styled-components";

export const PhoneCarts = ({phone}) => {
  return (
    <StyledPhoneCart>
      <div key={phone.id}>
        <img src={phone.image} alt="iphone" />
        <h3>{phone.title}</h3>
        <h3>{phone.price}</h3>
      </div>
    </StyledPhoneCart>
  );
};
const StyledPhoneCart = styled('div')