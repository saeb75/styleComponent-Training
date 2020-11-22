import React from "react";
import {
  MainSection,
  InfoContainer,
  HeaderButton,
  Info,
  InfoButton,
  Rectangle,
  Title,
  BorderRectangle,
} from "./MainContainerStyle";
import Navbar from "./Navbar/Navbar";
import SliderSection from "./../SliderSection/SliderSection";
const MainContainer = () => {
  return (
    <>
      <MainSection>
        <Navbar />
        <InfoContainer>
          <HeaderButton>
            <Title>Web development courses</Title>
            <Info>
              Learn to code with an easy to understand, project based learning
              path
            </Info>
            <InfoButton>Browse courses</InfoButton>
          </HeaderButton>
          <Rectangle>
            <BorderRectangle />
          </Rectangle>
        </InfoContainer>
      </MainSection>
      <SliderSection />
    </>
  );
};

export default MainContainer;
