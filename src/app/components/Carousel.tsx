import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';

export default function Carousel({ children }) {
  return <Items>{children}</Items>;
}

const Items = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
  background-color: ${DT.COLOR_BACKGROUND_DARKER};
  gap: 1px;
  padding: 1px;
  margin-top: -1px;
`;
