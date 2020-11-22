import styled from "styled-components";
import { Container } from "../GlobalStyle";
import { theme } from "../GlobalStyle";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ColorContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  display: grid;
  max-height: 900px;
  height: 90vh;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
`;
export const BlueContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blueColor};
`;
export const OrangeColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.greyColor};
`;
