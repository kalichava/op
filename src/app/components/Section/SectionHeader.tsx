import styled from 'styled-components/macro';

import { DesignTokens as DT } from 'styles/DesignTokens';
import { Icon } from 'app/components/Icon';
import { handleBackgroundColor, handleTextColor } from 'app/helpers';

type Props = {
  name: string;
  back?: boolean;
  color?: string;
  link?: {
    title: string;
    url?: string;
    icon: string;
  };
  onClick?: () => void;
};

export function SectionHeader({
  name,
  back = false,
  color = 'beta',
  link,
  onClick,
  ...props
}: Props) {
  return (
    <Wrapper className="sectionHeader" color={color}>
      {back && (
        <a href="#back" className="button link" onClick={onClick}>
          <Icon src="icons/arrow_back_ios.svg" size={16} />
        </a>
      )}
      <div className="title">{name}</div>
      {link && (
        <div className="link">
          <a
            href={link.url ? link.url : '#'}
            className="link__title"
            onClick={onClick}
          >
            {link.title && <span>{link.title}</span>}
            {link.icon && (
              <span className="button">
                <Icon src={`icons/${link.icon}.svg`} size={20} />
              </span>
            )}
          </a>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: ${DT.SPACE_3};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${DT.SPACE_5} ${DT.SPACE_5} ${DT.SPACE_5} ${DT.SPACE_6};
  background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHTER};
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  .title {
    flex-grow: 1;
    font-size: ${DT.FONT_SIZE_TITLE_MD};
    text-transform: uppercase;
    color: ${DT.COLOR_GAMMA_DARKER_50};
  }
  .link {
    color: ${DT.COLOR_LINK};
  }
  .link__title {
    color: inherit;
    font-size: ${DT.FONT_SIZE_BODY_MD};
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: ${DT.SPACE_2};
  }
  .button {
    display: block;
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1);
    border-radius: 99px;
    padding: ${DT.SPACE_2};
    color: inherit;
    svg,
    path {
      fill: currentColor;
    }
    &:hover {
      background: ${props => handleBackgroundColor(props.color, true, true)};
      transform: scale(1.15);
    }
  }
`;
