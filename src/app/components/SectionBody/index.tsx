import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';

type Props = {
  children: JSX.Element;
  paddings?: boolean;
};

export function SectionBody({ children, paddings = true }: Props) {
  return <Wrapper paddings={paddings}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ paddings: boolean }>`
  padding: ${props => (props.paddings ? `${DT.SPACE_4} ${DT.SPACE_6}` : '0')};
`;
