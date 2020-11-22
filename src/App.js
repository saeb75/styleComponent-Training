import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Component/Home";
import { ColorContainer } from "./Component/HomeStyle";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;

/* import styled from "styled-components";
import { Container } from "../Pages";
import { theme } from "../GlobalStyle";

export const HomeContainer = styled.div`
  width: 100%;
`;
export const ColorContainer = styled.div`
  width: 100%;
  max-width: 1900px;
  display: grid;
  height: 70vh;
  grid-template-columns: repeat(2, 1fr);
`;
export const BlueContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blueColor};
`;
export const OrangeColor = styled.div`
  width: 100%;
  height: 100%;
`;
 */
