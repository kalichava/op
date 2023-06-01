import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import { DesignTokens as DT } from '../../../styles/DesignTokens';

type Props = {
  name: string;
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
};

export function Button({
  name,
  icon = { name: false, position: 'left' },
  size,
  fullwidth = false,
  color = 'white',
}: Props) {
  return (
    <Wrapper className={fullwidth ? 'fullwidth' : ''} color={color}>
      {icon && icon.name && icon.position === 'left' ? (
        <Icon src={'icons/' + icon.name + '.svg'} />
      ) : (
        false
      )}
      <ButtonName>{name}</ButtonName>
      {icon && icon.name && icon.position === 'right' ? (
        <Icon src={'icons/' + icon.name + '.svg'} />
      ) : (
        false
      )}
    </Wrapper>
  );
}

const handleBackgroundColor = (color, hover = false) => {
  switch (color) {
    case 'alpha':
      return hover ? DT.COLOR_ALPHA_DARKER_10 : DT.COLOR_ALPHA;
    case 'beta':
      return hover ? DT.COLOR_BETA_DARKER_10 : DT.COLOR_BETA;
    case 'gamma':
      return hover ? DT.COLOR_GAMMA_DARKER_10 : DT.COLOR_GAMMA;
    case 'delta':
      return hover ? DT.COLOR_DELTA_DARKER_10 : DT.COLOR_DELTA;
    case 'epsilon':
      return hover ? DT.COLOR_EPSILON_DARKER_10 : DT.COLOR_EPSILON;
    case 'zeta':
      return hover ? DT.COLOR_ZETA_DARKER_10 : DT.COLOR_ZETA;
    default:
      return '#fff';
  }
};
const handleTextColor = (color, hover = false) => {
  switch (color) {
    case 'alpha':
    case 'beta':
    case 'gamma':
    case 'delta':
    case 'epsilon':
    case 'zeta':
      return '#FFF';
    default:
      return hover ? DT.COLOR_BETA : DT.COLOR_BETA_DARKER_10;
  }
};

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${DT.SPACE_4};
  padding: ${DT.SPACE_3} ${DT.SPACE_4};
  margin: 0 auto;
  white-space: nowrap;
  width: min-content;
  border-radius: ${DT.SPACE_3};
  color: ${props => handleTextColor(props.color)};
  background-color: ${props => handleBackgroundColor(props.color)};
  &:hover {
    color: ${props => handleTextColor(props.color, true)};
    background-color: ${props => handleBackgroundColor(props.color, true)};
  }
  &.fullwidth {
    width: 100%;
  }
`;
const ButtonName = styled.span`
  font-size: ${DT.FONT_SIZE_BODY_LG};
  font-weight: 600;
`;
