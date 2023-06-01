import * as React from 'react';
import styled from 'styled-components/macro';

import { DesignTokens as DT } from '../../../styles/DesignTokens';
import { Icon } from '../Icon';

type Props = {
  name: string;
  link?: {
    title: string;
    url: string;
    icon: string;
  };
  // onClick: () => void;
};

export function SectionHeader({ name, link }: Props) {
  return (
    <Wrapper>
      <div className="title">{name}</div>
      <div className="link">
        {link && link.title ? (
          <div className="link__title">{link.title}</div>
        ) : (
          ''
        )}
        {link && link.icon ? (
          <Icon src={'icons/' + link.icon + '.svg'} size={20} />
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${DT.SPACE_5} ${DT.SPACE_6};
  background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHTER};
  font-weight: 600;
  .title {
    flex-grow: 1;
    font-size: ${DT.FONT_SIZE_TITLE_MD};
    text-transform: uppercase;
    color: ${DT.COLOR_GAMMA_DARKER_50};
  }
  .link {
    color: ${DT.COLOR_LINK};
    display: flex;
    align-items: center;
  }
  .link__title {
    color: inherit;
    font-size: ${DT.FONT_SIZE_BODY_MD};
  }
  svg {
    margin-left: ${DT.SPACE_2};
  }
`;
