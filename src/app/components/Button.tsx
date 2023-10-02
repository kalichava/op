import styled from 'styled-components/macro';
import { Icon } from 'app/components/Icon';
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
  href?: string;
  tabindex?: any; // todo: fix it
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
  tabindex = '1',
  href = '#cancel',
  onClick,
}: Props) {
  return (
    <Wrapper
      href={href}
      className={fullwidth ? 'button fullwidth' : 'button'}
      size={size}
      color={color}
      rounded={rounded}
      inversed={inversed}
      tabIndex={tabindex}
      onClick={onClick}
    >
      {icon && icon.name && icon.position === 'left' ? (
        <Icon src={'icons/' + icon.name + '.svg'} size={handleIconSize(size)} />
      ) : (
        false
      )}
      {name ? <strong>{name}</strong> : ''}
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
    case 'XS':
      return 14;
    default:
      return 22;
  }
};

const handleIconPadding = (size: string) => {
  switch (size) {
    case 'LG':
      return `${DT.SPACE_5} ${DT.SPACE_7}`;
    case 'SM':
      return `${DT.SPACE_3} ${DT.SPACE_7}`;
    case 'XS':
      return `${DT.SPACE_0} ${DT.SPACE_7}`;
    default:
      return `${DT.SPACE_4} ${DT.SPACE_7}`;
  }
};

const handleFontSize = (size: string) => {
  switch (size) {
    case 'LG':
      return DT.FONT_SIZE_BODY_LG;
    case 'SM':
      return DT.FONT_SIZE_BODY_SM;
    case 'XS':
      return DT.FONT_SIZE_BODY_XS;
    default:
      return DT.FONT_SIZE_BODY_MD;
  }
};

const handleGap = (size: string) => {
  switch (size) {
    case 'LG':
      return DT.SPACE_4;
    case 'SM':
      return DT.SPACE_3;
    case 'XS':
      return DT.SPACE_2;
    default:
      return DT.SPACE_3;
  }
};

const handleHeight = (size: string) => {
  switch (size) {
    case 'LG':
      return DT.SPACE_11;
    case 'SM':
      return DT.SPACE_9;
    case 'XS':
      return DT.SPACE_8;
    default:
      return DT.SPACE_10;
  }
};

const Wrapper = styled.a<{ rounded; size; color; inversed }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  white-space: nowrap;
  width: min-content;
  height: ${props => handleHeight(props.size)};
  gap: ${props => handleGap(props.size)};
  font-size: ${props => handleFontSize(props.size)};
  padding: ${props => handleIconPadding(props.size)};
  border-radius: ${props => (props.rounded ? '99px' : DT.BORDER_RADIUS_MD)};
  color: ${props => handleTextColor(props.color, false, props.inversed)};
  background-color: ${props =>
    handleBackgroundColor(props.color, false, props.inversed)};
  border: 1px solid
    ${props => handleBorderColor(props.color, false, props.inversed)};

  &:hover {
    cursor: pointer;
    color: ${props => handleTextColor(props.color, true, props.inversed)};
    background-color: ${props =>
      handleBackgroundColor(props.color, true, props.inversed)};
    border-color: ${props =>
      handleBorderColor(props.color, true, props.inversed)};
  }

  &:focus {
    outline: ${DT.SPACE_1} solid
      ${props => handleBorderColor(props.color, false, true)};
  }

  &.fullwidth {
    width: 100%;
  }
`;
