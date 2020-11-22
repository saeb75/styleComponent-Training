import React, { useState } from "react";
/* import { useMediaPredicate } from "react-media-hook"; */
import Logo from "./../../../Assets/logo.svg";
import { theme } from "../../../GlobalStyle";
import { ThemeProvider } from "styled-components";

import {
  Navbars,
  NavContainer,
  NavLogo,
  NavUi,
  NavLink,
  NavItem,
  LogoIcon,
  LogoTitle,
  ButtonContainer,
  SignUpBtn,
  Hamburger,
  HamburgerContainer,
  Close,
  LogoImg,
  LoginBtn,
} from "./Navbar.element";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  /* const with1000 = useMediaPredicate("(max-width: 1000px)"); */

  return (
    <ThemeProvider theme={theme}>
      <Navbars>
        <NavContainer>
          <NavLogo>
            <LogoImg src={Logo} />
          </NavLogo>
          <HamburgerContainer onClick={() => setHamburger(!hamburger)}>
            {!hamburger ? <Hamburger /> : <Close />}
          </HamburgerContainer>
          <NavUi hamburger={hamburger}>
            <NavItem>
              <NavLink active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Blog</NavLink>
            </NavItem>
          </NavUi>
        </NavContainer>
      </Navbars>
    </ThemeProvider>
  );
};

export default Navbar;
