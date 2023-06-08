import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';

type Props = {
  children: JSX.Element;
};

export function SectionFooter({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${DT.SPACE_5} ${DT.SPACE_6};
  border-top: 1px solid ${DT.COLOR_BORDER_LIGHTER};
`;
