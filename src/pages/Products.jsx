import React from "react";
import { styled } from "styled-components";
import { PhoneCarts } from "../components/PhoneCarts";

export const DUMMY_PRODUCTS = [
  {
    title: "Смартфон Apple iPhone 14 Pro 256GB CA",
    price: 97700,
    id: "e1ndaskxe",
    image:
      "https://softech.kg/image/cache/296b69d253ff893ad55b7fabf3e031ed.jpg",
  },
  {
    title: "Смартфон Apple iPhone 13 256GB KH",
    price: 60700,
    id: "e242kjkx",
    image:
      "https://softech.kg/image/cache/a282da674bcc4003cfe99133ac1d52fd.jpg",
  },
  {
    title: "Смартфон Apple iPhone 14 Pro Max 1TB JP",
    price: 107700,
    id: "e3fpso1m",
    image:
      "https://softech.kg/image/cache/d871f069c929794a42d44fbe69c4c151.jpg",
  },
];

export const Products = () => {
  return (
    <StyledContainer>
      {DUMMY_PRODUCTS.map((phone) => {
        return (
          <PhoneCarts phone={phone}/>
        )
      })}
    </StyledContainer>
  );
};
const StyledContainer = styled('div')`
  display: flex;
  justify-content: space-around;
`