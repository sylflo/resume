import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import BurgerMenu from "./burger-menu"
import Brand from "./brand"
import CollapseMenu from "./collapse-menu"
import { NAVBAR_LINKS } from "./constants"

const NavBar = styled.nav`
  ${tw`fixed w-full top-0 left-0 text-xl z-10`}
  background: #2d3436;
`

const FlexContainer = styled.div`
  ${tw`flex m-auto justify-between py-0 px-8 h-20`}
  max-width: 120rem;
`

const NavLinks = styled.ul`
  ${tw`list-none my-auto mx-0`}
  justify-self: end;

  & a {
    ${tw`
      uppercase font-semibold my-0 mx-6 no-underline cursor-pointer
      `}
    color: #dfe6e9;
    border-bottom: 1px solid transparent;
    transition: all 300ms linear 0s;

    &:hover {
      color: #aec6cf;
      border-bottom: 1px solid #aec6cf;
    }

    @media (max-width: 768px) {
      ${tw`hidden`}
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`

const Navbar = ({ navbarState, handleNavbar }) => (
  <>
    <NavBar>
      <FlexContainer>
        <Brand />
        <NavLinks>
          {NAVBAR_LINKS.map((link) => (
            <a key={link.name} href={`#${link.href}`}>
              {link.name}
            </a>
          ))}
        </NavLinks>
        <BurgerWrapper>
          <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        </BurgerWrapper>
      </FlexContainer>
    </NavBar>
    <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
  </>
)

export default Navbar
