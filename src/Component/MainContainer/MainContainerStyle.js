import styled from "styled-components";
import { Container, Button } from "../../GlobalStyle";
export const MainSection = styled(Container)`
  background-color: white;
  margin-top: 86px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 99;
  padding-bottom: 0px;
`;
export const InfoContainer = styled.div`
  background-color: white;
  width: 1320px;
  display: grid;
  margin-top: 130px;
  grid-template-columns: repeat(2, 1fr);
`;
export const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  width: 500px;
`;
export const HeaderButton = styled.div``;

export const Info = styled.p`
  margin-top: 20px;
  width: 400px;
`;

export const InfoButton = styled(Button)`
  padding: 30px 5px;
  width: 212px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  font-size: 18px;
`;
export const Rectangle = styled.div``;
export const BorderRectangle = styled.div`
  width: 380px;
  height: 315px;
  border: 15px solid #ededf7;
  border-bottom: none;
  margin-top: 100px;
  margin-left: 180px;
`;
