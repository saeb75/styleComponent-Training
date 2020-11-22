import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding:0;
        font-family: "Mulish", sans-serif;
        box-sizing:border-box;
    }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  max-width: 1600px;
`;

export const theme = {
  blueColor: "#442EBA",
  greyColor: "#EDEDF7",
  fontBlack: "#0F0F2B",
  fontSoftBlack: "#9D9DC1",
  orange: "#FFD054",
};

export const Button = styled.button`
  outline: none;
  border: none;
  color: width;
  cursor: pointer;
  color: ${({ orange }) => (orange ? "white" : "#FB8F1D")};
  background-color: ${({ orange }) => (orange ? "#FB8F1D" : "#442EBA")};
  width: 132px;
  height: 44px;
`;
