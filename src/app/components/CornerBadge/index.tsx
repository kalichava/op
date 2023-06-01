import styled from 'styled-components/macro';
import { DesignTokens as DT } from '../../../styles/DesignTokens';

type Props = {
  name: string | boolean;
  color?: string;
};

export function CornerBadge({ name, color = 'alpha' }: Props) {
  return name ? (
    <Wrapper color={color}>
      <span>{name}</span>
      <svg
        width="7"
        height="23"
        viewBox="0 0 7 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 23H5.83785C6.78683 23 7.33435 21.8133 6.77494 20.969L1.00043 12.2532C0.703117 11.8045 0.703117 11.1955 1.00043 10.7468L6.77494 2.031C7.33435 1.18666 6.78682 0 5.83785 0H0V23Z"
          fill={handleBackgroundColor(color)}
        />
      </svg>
    </Wrapper>
  ) : (
    <div></div>
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

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  padding: 0 0 0 ${DT.SPACE_4};
  font-size: ${DT.FONT_SIZE_BODY_SM};
  line-height: 23px;
  height: 23px;
  font-weight: 600;
  color: ${props => handleTextColor(props.color)};
  background-color: ${props => handleBackgroundColor(props.color)};
  border: none;
  svg {
    position: relative;
    left: 7px;
  }
`;
