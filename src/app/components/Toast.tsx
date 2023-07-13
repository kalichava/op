import styled from 'styled-components/macro';
import { Icon } from 'app/components/Icon';
import * as Ariakit from '@ariakit/react';
import { handleColor, handleIconSize, handleBorderColor } from 'app/helpers';
import { DesignTokens as DT } from 'styles/DesignTokens';

type ToastProps = {
  name: string;
  icon?: string;
  color?: string;
  variant?: string;
  closable?: boolean;
  collapsable?: boolean;
  children: JSX.Element;
  onClick?: Function;
  className?: string;
};

export const Toast = ({
  name = 'Toast',
  icon = '',
  color = 'white',
  variant = 'MD',
  closable = true,
  collapsable = false,
  className = '',
  children,
}: // onClick = () => {},
ToastProps) => {
  const disclosure = Ariakit.useDisclosureStore({ defaultOpen: true });
  const state = disclosure.useState();

  function handleToastHeaderClick(e): boolean {
    if (closable && ['svg', 'path'].includes(e.target.tagName)) {
      if (state.open) {
        state.contentElement?.parentElement?.remove();
      } else {
        disclosure.hide();
      }
    }
    return true;
  }

  return (
    <ToastWrapper color={color} variant={variant} className={className}>
      <ToastHeader
        store={disclosure}
        toggleOnClick={handleToastHeaderClick}
        disabled={!collapsable && !closable}
      >
        {icon ? (
          <Icon src={'icons/' + icon + '.svg'} size={handleIconSize(variant)} />
        ) : (
          ''
        )}
        <span className="name">{name}</span>
        {closable ? (
          <Icon
            src={`icons/${state.open ? 'close' : 'keyboard_arrow_down'}.svg`}
            size={handleIconSize(variant)}
          />
        ) : (
          ''
        )}
        {collapsable ? (
          <Icon
            src="icons/keyboard_arrow_up.svg"
            size={handleIconSize(variant)}
            className="collapse"
          ></Icon>
        ) : (
          ''
        )}
      </ToastHeader>
      <ToastBody store={disclosure}>{children}</ToastBody>
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
          border: 1px solid ${
            props.color === 'white'
              ? DT.COLOR_BORDER_LIGHTER
              : handleBorderColor(props.color, false, false)
          };
          border-radius: ${DT.BORDER_RADIUS_MD};
          background-color: ${
            props.color === 'white'
              ? 'white'
              : handleColor(props.color, 'lighter', 95)
          };
          color: ${
            props.color === 'white'
              ? DT.COLOR_TEXT
              : handleColor(props.color, 'darker', 70)
          };
          font-size: ${DT.FONT_SIZE_BODY_MD};
          line-height: ${DT.LINE_HEIGHT_BODY_MD};
          overflow: hidden;

          ${ToastHeader} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
            color: ${
              props.color === 'white'
                ? DT.COLOR_TEXT
                : handleColor(props.color, 'darker', 80)
            };

            background-color: ${
              props.color === 'white'
                ? DT.COLOR_BACKGROUND_LIGHTER
                : handleColor(props.color, 'lighter', 80)
            };

          }

          ${ToastBody} {
            padding: ${DT.SPACE_4} ${DT.SPACE_6};
          }
        `;
    }
  }}
`;

const ToastBody = styled(Ariakit.DisclosureContent)`
  position: relative;
  outline: none;
`;

const ToastHeader = styled(Ariakit.Disclosure)`
  outline: none;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${DT.SPACE_4};
  text-transform: uppercase;
  font-weight: ${DT.FONT_WEIGHT_BOLD};
  .icon {
    transition: 0.2s;
  }
  .name {
    flex-grow: 1;
    text-align: left;
  }
  &[aria-expanded='false'] {
    .collapse {
      transform: rotate(180deg);
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
