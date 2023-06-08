import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { USDollar, handleBackgroundColor, handleTextColor } from 'app/helpers';
import { Icon } from 'app/components/Icon';

type Props = {
  name: string;
  color?: string;
  icon?: string;
};

export function Badge({ name, color = 'alpha', icon = '' }: Props) {
  return (
    <Wrapper color={color}>
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        className="badge__dot"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.31483 1.40716C8.07482 0.51439 9.18823 0 10.3607 0H23V20H10.3607C9.18823 20 8.07482 19.4856 7.31483 18.5928L1.1036 11.2964C0.467501 10.5492 0.4675 9.45082 1.1036 8.70358L7.31483 1.40716ZM15 10C15 11.3807 13.8807 12.5 12.5 12.5C11.1193 12.5 10 11.3807 10 10C10 8.61929 11.1193 7.5 12.5 7.5C13.8807 7.5 15 8.61929 15 10ZM21.2984 2.05263C21.5873 2.05263 21.8215 1.81699 21.8215 1.52632C21.8215 1.23564 21.5873 1 21.2984 1C21.0096 1 20.7754 1.23564 20.7754 1.52632C20.7754 1.81699 21.0096 2.05263 21.2984 2.05263ZM21.2984 4.1581C21.5873 4.1581 21.8215 3.92246 21.8215 3.63178C21.8215 3.34111 21.5873 3.10547 21.2984 3.10547C21.0096 3.10547 20.7754 3.34111 20.7754 3.63178C20.7754 3.92246 21.0096 4.1581 21.2984 4.1581ZM21.8215 5.73725C21.8215 6.02793 21.5873 6.26357 21.2984 6.26357C21.0096 6.26357 20.7754 6.02793 20.7754 5.73725C20.7754 5.44658 21.0096 5.21094 21.2984 5.21094C21.5873 5.21094 21.8215 5.44658 21.8215 5.73725ZM21.2984 8.36904C21.5873 8.36904 21.8215 8.1334 21.8215 7.84272C21.8215 7.55205 21.5873 7.31641 21.2984 7.31641C21.0096 7.31641 20.7754 7.55205 20.7754 7.84272C20.7754 8.1334 21.0096 8.36904 21.2984 8.36904ZM21.8215 9.94819C21.8215 10.2389 21.5873 10.4745 21.2984 10.4745C21.0096 10.4745 20.7754 10.2389 20.7754 9.94819C20.7754 9.65751 21.0096 9.42188 21.2984 9.42188C21.5873 9.42188 21.8215 9.65751 21.8215 9.94819ZM21.2984 12.578C21.5873 12.578 21.8215 12.3424 21.8215 12.0517C21.8215 11.761 21.5873 11.5254 21.2984 11.5254C21.0096 11.5254 20.7754 11.761 20.7754 12.0517C20.7754 12.3424 21.0096 12.578 21.2984 12.578ZM21.8215 14.1572C21.8215 14.4479 21.5873 14.6835 21.2984 14.6835C21.0096 14.6835 20.7754 14.4479 20.7754 14.1572C20.7754 13.8665 21.0096 13.6309 21.2984 13.6309C21.5873 13.6309 21.8215 13.8665 21.8215 14.1572ZM21.2984 16.789C21.5873 16.789 21.8215 16.5533 21.8215 16.2626C21.8215 15.972 21.5873 15.7363 21.2984 15.7363C21.0096 15.7363 20.7754 15.972 20.7754 16.2626C20.7754 16.5533 21.0096 16.789 21.2984 16.789ZM21.8215 18.3681C21.8215 18.6588 21.5873 18.8944 21.2984 18.8944C21.0096 18.8944 20.7754 18.6588 20.7754 18.3681C20.7754 18.0774 21.0096 17.8418 21.2984 17.8418C21.5873 17.8418 21.8215 18.0774 21.8215 18.3681Z"
          fill="none"
        />
      </svg>
      <div className="badge__data">
        {icon ? <Icon src={'icons/' + icon + '.svg'} size={14}></Icon> : ''}
        {name ? <span className="name">{name}</span> : ''}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  position: relative;
  padding: 0 0 0 23px;
  color: ${props => handleTextColor(props.color)};
  margin-right: ${DT.SPACE_2};
  .badge__dot {
    position: absolute;
    left: 0;
    top: 0;
    fill: ${props => handleBackgroundColor(props.color)};
    height: 20px;
    path {
      fill: ${props => handleBackgroundColor(props.color)};
    }
  }
  .badge__data {
    display: flex;
    align-items: center;
    height: 20px;
    background-color: ${props => handleBackgroundColor(props.color)};
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    border: none;
    border-radius: 0 ${DT.SPACE_2} ${DT.SPACE_2} 0;
    font-size: ${DT.FONT_SIZE_BODY_SM};
    padding: 0 ${DT.SPACE_3} 0 ${DT.SPACE_2};
    gap: ${DT.SPACE_2};
    white-space: nowrap;
  }
  .name {
  }
  .icon {
    fill: ${props => handleTextColor(props.color, false, false)};
  }
`;
