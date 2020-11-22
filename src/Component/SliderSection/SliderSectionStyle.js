import styled from "styled-components";
import { Container } from "./../../GlobalStyle";
import { theme } from "../../GlobalStyle";
export const MainSliderSection = styled(Container)`
  background: ${({ theme }) => theme.greyColor};
  height: 400px;
  z-index: 99;
  padding: 0;
  display: flex;
  position: relative;
  justify-content: flex-end;
`;
export const BlueRectangle = styled.div`
  background: ${({ theme }) => theme.blueColor};
  height: 657px;
  width: 500px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const AbsloatContainer = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: flex-end;
`;
export const OrangeRectangle = styled.div`
  background: ${({ theme }) => theme.orange};
  height: 400px;
  width: 166px;
`;
export const Pattern = styled.img`
  margin: 100px 40px;
`;

export const OpacityBlueOrange = styled.div`
  background: ${({ theme }) => theme.orange};
  height: 120px;
  width: 100%;
  opacity: 0.8;
  z-index: 99;
`;
export const SliderContainers = styled.div`
  z-index: 999999;
  width: 1400px;
`;

export const Slide = styled.div`
  width: 200px;
  height: 200px;
`;
export const Item = styled.div`
  width: 200px;
  height: 140px;
  background-color: blue;
`;
