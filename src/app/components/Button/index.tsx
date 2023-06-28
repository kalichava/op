import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import { DesignTokens as DT } from 'styles/DesignTokens';
import {
  handleBackgroundColor,
  handleTextColor,
  handleBorderColor,
} from 'app/helpers';

type Props = {
  name?: string;
  icon?: {
    name: string | boolean;
    position: string;
  };
  size?: string;
  fullwidth?: boolean;
  color?: string;
  rounded?: boolean;
  inversed?: boolean;
  // additionalText?: string;
  // additionalIcon?: string;
  onClick?: (event) => void;
};

export function Button({
  name,
  icon = { name: false, position: 'left' },
  size = 'MD',
  fullwidth = false,
  color = 'white',
  rounded = false,
  inversed = false,
  onClick,
}: Props) {
  return (
    <Wrapper
      className={fullwidth ? 'fullwidth' : ''}
      size={size}
      color={color}
      rounded={rounded}
      inversed={inversed}
      onClick={onClick}
    >
      {icon && icon.name && icon.position === 'left' ? (
        <Icon src={'icons/' + icon.name + '.svg'} size={handleIconSize(size)} />
      ) : (
        false
      )}
      {name ? <ButtonName>{name}</ButtonName> : ''}
      {icon && icon.name && icon.position === 'right' ? (
        <Icon src={'icons/' + icon.name + '.svg'} size={handleIconSize(size)} />
      ) : (
        false
      )}
    </Wrapper>
  );
}

const handleIconSize = (size: string) => {
  switch (size) {
    case 'LG':
      return 30;
    case 'SM':
      return 18;
    default:
      return 22;
  }
};

const Wrapper = styled.a<{ rounded; size; color; inversed }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${DT.SPACE_4};
  padding: ${DT.SPACE_3} ${DT.SPACE_4};
  margin: 0 auto;
  white-space: nowrap;
  width: min-content;
  border-radius: ${props => (props.rounded ? '99px' : DT.BORDER_RADIUS_MD)};
  color: ${props => handleTextColor(props.color, false, props.inversed)};
  background-color: ${props =>
    handleBackgroundColor(props.color, false, props.inversed)};
  border: 1px solid
    ${props => handleBorderColor(props.color, false, props.inversed)};
  &:hover {
    color: ${props => handleTextColor(props.color, true, props.inversed)};
    background-color: ${props =>
      handleBackgroundColor(props.color, true, props.inversed)};
    border-color: ${props =>
      handleBorderColor(props.color, true, props.inversed)};
  }
  &.fullwidth {
    width: 100%;
  }
`;
const ButtonName = styled.span`
  font-size: ${DT.FONT_SIZE_BODY_LG};
  font-weight: ${DT.FONT_WEIGHT_BOLD};
`;
