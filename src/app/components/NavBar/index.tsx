import * as React from 'react';
import styled from 'styled-components/macro';
import Hamburger from 'hamburger-react';
import { Logo } from './Logo';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Nav } from './Nav';

export function NavBar() {
  function toggleHamburgerMenu() {
    console.log('toggleHamburgerMenu');
  }

  return (
    <Wrapper>
      <Hamburger
        size={24}
        distance="sm"
        onToggle={toggleHamburgerMenu}
        color="#343C47"
      />
      <Logo />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
  padding: ${DT.SPACE_2} ${DT.SPACE_3};
`;
