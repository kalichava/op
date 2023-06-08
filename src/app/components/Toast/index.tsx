import styled from 'styled-components/macro';
import { Icon } from 'app/components/Icon';
import {
  handleBackgroundColor,
  handleTextColor,
  handleBorderColor,
  handleColor,
  handleIconSize,
} from 'app/helpers';
import { DesignTokens as DT } from 'styles/DesignTokens';
// import { Icon } from 'app/components/Icon';

// enum Variant {
//   MD = 'MD',
//   SM = 'SM',
//   LG = 'LG',
// }

type ToastProps = {
  name: string;
  icon?: string;
  color?: string;
  variant?: string;
  closable?: boolean;
  collapsable?: boolean;
  children: JSX.Element;
};

export const Toast = ({
  name = 'Toast',
  icon = '',
  color = 'gamma',
  variant = 'MD',
  closable = true,
  collapsable = false,
  children,
}: ToastProps) => {
  return (
    <ToastWrapper color={color} variant={variant}>
      <ToastHeader>
        {icon ? (
          <Icon src={'icons/' + icon + '.svg'} size={handleIconSize(variant)} />
        ) : (
          ''
        )}
        <span className="name">{name}</span>
        {closable ? (
          <Icon src="icons/close.svg" size={handleIconSize(variant)}></Icon>
        ) : (
          ''
        )}
        {collapsable ? (
          <Icon
            src="icons/keyboard_arrow_up.svg"
            size={handleIconSize(variant)}
          ></Icon>
        ) : (
          ''
        )}
      </ToastHeader>
      <ToastBody>{children}</ToastBody>
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div<{ color: string; variant: string }>`
  ${props => {
    switch (props.variant) {
      case 'SM':
        return `
          border-radius: ${DT.BORDER_RADIUS_SM};
          background-color: ${handleColor(props.color, 'lighter', 95)};
          color: ${handleColor(props.color, 'darker', 80)};
          font-size: ${DT.FONT_SIZE_BODY_SM};
          line-height: ${DT.LINE_HEIGHT_BODY_SM};
          ${ToastHeader} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
          }
          ${ToastBody} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
          }
          ${ToastBody}:before {
            content: '';
            position: relative;
            top: -${DT.SPACE_4};
            display: block;
            height: 1px;
            background-color: ${handleColor(props.color, 'lighter', 80)};
          }
        `;
      case 'LG':
        return `
        border: 1px solid ${handleColor(props.color, 'lighter', 80)};
        border-radius: ${DT.BORDER_RADIUS_LG};
        background-color: ${handleColor(props.color, 'lighter', 95)};
        color: ${handleColor(props.color, 'darker', 80)};
        font-size: ${DT.FONT_SIZE_BODY_LG};
        line-height: ${DT.LINE_HEIGHT_BODY_LG};
        ${ToastHeader} {
          padding: ${DT.SPACE_5} ${DT.SPACE_6};
          background-color: ${handleColor(props.color, 'lighter', 80)};
        }
        ${ToastBody} {
          padding: ${DT.SPACE_4} ${DT.SPACE_6};
        }

        `;

      default:
        return `
          border: 1px solid ${handleColor(props.color, 'lighter', 80)};
          border-radius: ${DT.BORDER_RADIUS_MD};
          background-color: ${handleColor(props.color, 'lighter', 95)};
          color: ${handleColor(props.color, 'darker', 80)};
          font-size: ${DT.FONT_SIZE_BODY_MD};
          line-height: ${DT.LINE_HEIGHT_BODY_MD};
          ${ToastHeader} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
            background-color: ${handleColor(props.color, 'lighter', 80)};
          }
          ${ToastBody} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
          }
        `;
    }
  }}
`;

const ToastBody = styled.div`
  position: relative;
`;

const ToastHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${DT.SPACE_4};
  text-transform: uppercase;
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  .name {
    flex-grow: 1;
  }
`;
