import * as React from 'react';
import styled from 'styled-components/macro';
import { Icon } from 'app/components/Icon';
import { DesignTokens as DT } from 'styles/DesignTokens';

// import { ReactComponent as AccountIcon } from '../../assets/icons/account_circle.svg';
// import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping_cart.svg';

export function Nav() {
  return (
    <Wrapper>
      <a href="#my-account" title="My Account">
        <Icon src="icons/account_circle.svg" />
      </a>
      <a href="#shopping-cart" title="Shopping Cart">
        <Icon src="icons/shopping_cart.svg" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  a {
    color: ${DT.COLOR_GAMMA};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;

    &:hover {
    }

    &:active {
    }
  }
`;
