import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { handleBackgroundColor, handleTextColor } from 'app/helpers';
import { Icon } from 'app/components/Icon';

type TagProps = {
  name: string;
  color?: string;
  close?: boolean;
};

export default function Tag({
  name,
  color = 'alpha',
  close = false,
}: TagProps) {
  return (
    <Wrapper color={color}>
      <div className="badge__data">
        {<span className="name">{name}</span>}
        {close && <Icon src="icons/close.svg" size={14}></Icon>}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.span<{ color }>`
  display: inline-block;
  background-color: ${props =>
    handleBackgroundColor(props.color, false, false)};
  color: ${props => handleTextColor(props.color, false, false)};
  padding: 0 ${DT.SPACE_4};
  margin-right: -${DT.SPACE_4};
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  color: white;
  border-radius: 99px;
`;
