import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Icon } from 'app/components/Icon';

export default function Breadcrumbs() {
  return (
    <Wrapper>
      <a href="#home">
        <Icon src="icons/home_filled.svg" size={16}></Icon>
      </a>
      <Slash>/</Slash>
      <a className="current" href="#shopping-cart">
        Example Form
      </a>
    </Wrapper>
  );
}
const Slash = styled.div`
  color: ${DT.COLOR_GAMMA_LIGHTER_60};
`;

const Wrapper = styled.div`
  background-color: ${DT.COLOR_BACKGROUND};
  display: flex;
  align-items: center;
  gap: ${DT.SPACE_3};
  padding: ${DT.SPACE_5} ${DT.SPACE_6};
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  font-size: ${DT.FONT_SIZE_BODY_MD};
  a {
    color: inherit;
    &.current {
      color: ${DT.COLOR_GAMMA_LIGHTER_20};
      font-weight: normal;
    }
  }
`;
