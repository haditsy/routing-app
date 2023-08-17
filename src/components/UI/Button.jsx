import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { Main } from "../../pages/Main";

export default function Button() {
  return (
    <>
      <StyledButton>
        <StyledLink to='/'>Go Back</StyledLink>
      </StyledButton>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  );
}
const StyledButton = styled("button")`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  background-color: #6a6ade;
  border-radius: 30px;
  border: none;
`;
const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
`