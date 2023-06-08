import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Icon } from '../Icon';

type Props = {
  name: string;
  icon?: string;
  size?: string;
  border?: boolean;
  additionalText?: string;
  additionalIcon?: string;
  // onClick: () => void;
};

export function ListItem({
  name,
  icon = 'chevron_right',
  size = 'md',
  border = false,
  additionalText = '',
  additionalIcon = '',
}: Props) {
  return (
    <Wrapper href="#">
      <ListItemIcon>
        <Icon src={'icons/' + icon + '.svg'} />
      </ListItemIcon>
      <ListItemName>{name}</ListItemName>
      {additionalText ? (
        <ListItemAdditionalText>{additionalText}</ListItemAdditionalText>
      ) : (
        false
      )}
      {additionalIcon ? (
        <Icon src={'icons/' + additionalIcon + '.svg'} />
      ) : (
        false
      )}
    </Wrapper>
  );
}

const Wrapper = styled.a`
  background-color: white;
  border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHT};
  display: flex;
  width: 100%;
  padding: ${DT.SPACE_4} ${DT.SPACE_6};
  margin: 0 auto;
  font-size: ${DT.FONT_SIZE_BODY_LG};
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  :last-child {
    border: none;
  }
  &:hover {
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    border-bottom-color: ${DT.COLOR_BORDER_LIGHTER};
  }
`;

const ListItemName = styled.div`
  flex-grow: 1;
  color: ${DT.COLOR_TEXT};
`;

const ListItemIcon = styled.div`
  color: ${DT.COLOR_TEXT};
  padding-right: ${DT.SPACE_4};
  g,
  path {
    fill: ${DT.COLOR_GAMMA_DARKER_80};
  }
`;

const ListItemAdditionalText = styled.div`
  font-size: ${DT.FONT_SIZE_BODY_MD};
  padding-right: ${DT.SPACE_2};
`;
