import { handleBackgroundColor, handleBorderColor } from 'app/helpers';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';

export default function AltPaymentButton({ href, children }) {
  return <Wrapper href={href}>{children}</Wrapper>;
}

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: ${DT.SPACE_3} ${DT.SPACE_4};
  margin: 0 auto;
  border-radius: ${DT.SPACE_2};
  background-color: ${props => handleBackgroundColor(props.color, false, true)};
  border: 1px solid ${props => handleBorderColor(props.color, false, true)};
  &:hover {
    background-color: ${props =>
      handleBackgroundColor(props.color, true, true)};
    border-color: ${props => handleBorderColor(props.color, true, true)};
  }
`;
