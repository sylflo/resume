import React from 'react';
import styled from '@emotion/styled';
import tw from "tailwind.macro";
import { NAVBAR_LINKS } from './constants';

const CollapseWrapper = styled.div`
  ${tw`fixed inset-x-0`}
  background: #2d3436;
  top: 4.5rem;
`;

const NavLinks = styled.ul`
  ${tw`list-none py-12 pr-4 pl-8`}

  & a {
    ${tw`text-2xl leading-tight uppercase no-underline cursor-pointer`}
    color: #dfe6e9;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;


export default ({navbarState, handleNavbar}) => (
  <>
    {navbarState &&
      <CollapseWrapper>
        <NavLinks>
          {NAVBAR_LINKS.map((link) =>
            <li key={link.name} onClick={handleNavbar}>
              <a href={`#${link.href}`}>{link.name}</a>
            </li>
          )}
        </NavLinks>
      </CollapseWrapper>
    }
  </>
);
