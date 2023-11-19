import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`relative pt-3 cursor-pointer block`}
  & span {
    background: white;
    ${tw`relative block w-12 h-2 mb-3`}
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    ${tw`opacity-0`}
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`

const BurgerMenu = ({ handleNavbar, navbarState }) => (
  <Wrapper onClick={handleNavbar}>
    <div className={navbarState ? "open" : ""}>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </Wrapper>
)

export default BurgerMenu
