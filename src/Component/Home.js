import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MainContainer from "./MainContainer/MainContainer";
import { theme } from "../GlobalStyle";
import {
  HomeContainer,
  ColorContainer,
  BlueContainer,
  OrangeColor,
} from "./HomeStyle";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <ColorContainer>
          <BlueContainer />
          <OrangeColor />
        </ColorContainer>
        <MainContainer />
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
