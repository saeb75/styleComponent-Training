import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Button, theme } from "../../../GlobalStyle";
/* import { AiFillMacCommand } from "react-icons/ai";
import { useMediaPredicate } from "react-media-hook";
import { FaAlignRight, FaTimes } from "react-icons/fa"; */

export const Navbars = styled.div`
  width: 100%;
  margin-top: 15px;

  display: flex;
  justify-content: center;
  position: sticky;
`;

export const NavContainer = styled(Container)`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  ${Container}
`;

export const LogoImg = styled.img`
  font-size: 2rem;
  color: #8e44ad;
  margin-right: 10px;
`;

export const LogoTitle = styled.h3`
  color: #8e44ad;
`;

export const NavLogo = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const NavUi = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  list-style: none;
  @media only screen and (max-width: 1000px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    transition: 0.4s all linear;
    left: ${({ hamburger }) => (hamburger ? "0" : "-100%")};
    top: 0;
    z-index: 99;
    padding-top: 100px;
    background-color: #2c3e50;
    flex-direction: column;
  } ;
`;

export const NavItem = styled.li`
  margin-left: 5px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-bottom: 10px;

    width: 100%;
    display: flex;
    justify-content: center;
  } ;
`;
export const NavLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  padding: 3px 20px;
  color: ${({ active, theme }) =>
    active ? theme.fontBlack : theme.fontSoftBlack};
  font-size: 1rem;
  transition: 0.2s all linear;
  &:hover {
    color: #202336;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: white;
    &:hover {
      background-color: grey;
      color: white;
    }
  } ;
`;

export const ButtonContainer = styled.div``;
export const SignUpBtn = styled(Button)`
  font-size: 1rem;
  margin-left: 15px;

  ${Button};
`;
export const LoginBtn = styled(Button)`
  font-size: 1rem;
  margin-left: 25px;
  ${Button};
`;

export const HamburgerContainer = styled.div`
  display: none;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-self: center;
    font-size: 1.2rem;
    z-index: 999;
  } ;
`;

export const Hamburger = styled.div`
  color: #8e44ad;
`;
export const Close = styled.div`
  color: #8e44ad;
`;
