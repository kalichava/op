import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import {
  handleBackgroundColor,
  handleTextColor,
  handleBorderColor,
} from 'app/helpers';

type Props = {
  type?: string;
  value?: string;
  placeholder?: string;
  icon?: {
    name: string | boolean;
    position: string;
  };
  size?: string;
  fullwidth?: boolean;
  color?: string;
  // additionalText?: string;
  // additionalIcon?: string;
  // onClick: () => void;
  onChange: (event: any) => void;
};

export function Input({
  type = 'text',
  placeholder,
  value = '',
  icon = { name: false, position: 'left' },
  size,
  fullwidth = false,
  color = 'white',
  onChange = () => console.log('onChange'),
}: Props) {
  return (
    <Wrapper
      type={type}
      placeholder={placeholder}
      value={value}
      className={fullwidth ? 'fullwidth' : ''}
      color={color}
      onChange={onChange}
    ></Wrapper>
  );
}

const Wrapper = styled.input<{ color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${DT.SPACE_4};
  padding: ${DT.SPACE_3} ${DT.SPACE_4};
  margin: 0 auto;
  white-space: nowrap;
  width: min-content;
  border-radius: ${DT.SPACE_2};
  border: 1px solid ${props => handleBorderColor(props.color, false, true)};
  &:hover {
  }
  &.fullwidth {
    width: 100%;
  }
`;
