import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import { Icon } from 'app/components/Icon';

type Props = {
  name: string;
  icon?: string;
  size?: string;
  border?: boolean;
  additionalText?: string;
  additionalIcon?: string;
  inversed?: boolean;
  bold?: boolean;
  onClick?: () => void;
};

export function ListItem({
  name,
  icon = 'chevron_right',
  size = 'md',
  border = false,
  additionalText = '',
  additionalIcon = '',
  inversed = false,
  bold = true,
  onClick,
}: Props) {
  return (
    <Wrapper href="#" inversed={inversed} bold={bold} onClick={onClick}>
      <ListItemIcon>
        {icon && <Icon src={'icons/' + icon + '.svg'} />}
      </ListItemIcon>
      <ListItemName>{name}</ListItemName>
      {additionalText ? (
        <ListItemAdditionalText>{additionalText}</ListItemAdditionalText>
      ) : (
        false
      )}
      {additionalIcon ? (
        <Icon src={'icons/' + additionalIcon + '.svg'} className="colorBeta" />
      ) : (
        false
      )}
    </Wrapper>
  );
}

const Wrapper = styled.a<{ inversed; bold }>`
  background-color: ${props =>
    props.inversed ? DT.COLOR_GAMMA_DARKER_40 : 'white'};
  border-bottom: 1px solid
    ${props => (props.inversed ? DT.COLOR_GAMMA : DT.COLOR_BORDER_LIGHT)};

  color: ${props =>
    props.inversed ? DT.COLOR_GAMMA_LIGHTER_80 : DT.COLOR_TEXT};
  display: flex;
  width: 100%;
  padding: ${DT.SPACE_4} ${DT.SPACE_6};
  margin: 0 auto;
  font-size: ${DT.FONT_SIZE_BODY_LG};
  font-weight: ${props => (props.bold ? DT.FONT_WEIGHT_BOLD : 'normal')};
  /* :last-child {
    border: none;
  } */
  &:hover {
    background-color: ${props =>
      props.inversed ? DT.COLOR_GAMMA_DARKER_20 : DT.COLOR_BACKGROUND_LIGHT};
    border-bottom-color: ${props =>
      props.inversed ? DT.COLOR_GAMMA_LIGHTER_20 : DT.COLOR_BORDER_LIGHTER};
    color: ${props => (props.inversed ? 'white' : DT.COLOR_GAMMA_DARKER_20)};
  }
`;

const ListItemName = styled.div`
  color: inherit;
  flex-grow: 1;
`;

const ListItemIcon = styled.div`
  color: inherit;
  padding-right: ${DT.SPACE_4};
  g,
  path {
    fill: ${DT.COLOR_GAMMA_DARKER_80};
  }
`;

const ListItemAdditionalText = styled.div`
  font-size: ${DT.FONT_SIZE_BODY_MD};
  padding-right: ${DT.SPACE_2};
  color: ${DT.COLOR_LINK};
`;
