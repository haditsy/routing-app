import React from "react";
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
    <>
      {DUMMY_PRODUCTS.map((phone) => {
        return (
          <PhoneCarts phone={phone}/>
        )
      })}
    </>
  );
};
// const StyledDiv = styled('div')`
//   width: 300px;
//   height: 500px;
//   background-color: white;
//   display: flex;
// `
// const StyledImages = styled('img')`
//   width: 200px;
//   height: 250px;
// `