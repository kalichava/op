/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Ariakit from '@ariakit/react';
import styled from 'styled-components/macro';
import { DesignTokens as DT } from 'styles/DesignTokens';
import {
  handleBackgroundColor,
  handleTextColor,
  handleBorderColor,
} from 'app/helpers';
import { Icon } from 'app/components/Icon';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

type DialogProps = {
  name: string;
  children: JSX.Element | React.ReactNode;
  size?: string;
  color?: string;
  dialog?: any;
  back?: boolean;
  modal?: boolean;
};

export default function Dialog({
  name,
  children,
  size = 'MD',
  color = 'beta',
  dialog,
  back,
  modal = true,
}: DialogProps) {
  const mounted = dialog.useState('mounted');

  const modalVariantsMd = {
    initial: { opacity: 0, y: 24, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.9 },
  };

  const modalVariantsLg = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.15 },
    },
    exit: { opacity: 0, y: -12 },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    hidden: { opacity: 0 },
  };

  const childrenVariants = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.15, staggerChildren: 0.1 },
    },
    hidden: { opacity: 0, y: -24 },
  };

  const isLarge: boolean = size === 'LG';

  return (
    <AnimatePresence>
      {mounted && (
        <Wrapper
          store={dialog}
          modal={modal}
          className={isLarge ? 'dialog dialog--lg' : 'dialog'}
          alwaysVisible
          backdrop={
            <motion.div
              className="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="animate"
              exit="hidden"
            />
          }
          render={
            <motion.div
              variants={isLarge ? modalVariantsLg : modalVariantsMd}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          }
          color={color}
        >
          <Ariakit.DialogHeading className="heading">
            {isLarge && (
              <a
                href="#account"
                className="account"
                onClick={() => {
                  dialog.hide();
                }}
              >
                <span>Sign In</span>
                <Icon src="icons/login.svg" size={16} />
              </a>
            )}

            {back && (
              <a
                className="button button--back"
                onClick={() => {
                  dialog.hide();
                }}
              >
                <Icon src="icons/arrow_back_ios.svg" size={16} />
              </a>
            )}

            <span className="name">{name}</span>

            <a
              className="button"
              onClick={() => {
                dialog.hide();
              }}
            >
              <Icon src="icons/close.svg" size={isLarge ? 20 : 16} />
            </a>
          </Ariakit.DialogHeading>
          <motion.div className="dialogContent" variants={childrenVariants}>
            {children}
          </motion.div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

const Wrapper = styled(Ariakit.Dialog)<{ color: string; store: {} }>`
  position: fixed;
  overflow: auto;
  z-index: 50;
  inset: ${DT.SPACE_6};
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: calc(100vh - 2 * 0.75rem);
  max-width: calc(${DT.DEVICE_WIDTH} - ${DT.SPACE_8});
  border-radius: ${DT.BORDER_RADIUS_MD};
  font-size: ${DT.FONT_SIZE_BODY_MD};
  line-height: ${DT.LINE_HEIGHT_BODY_MD};
  background-color: white;
  margin: auto;
  padding: 0;
  &.dialog--lg {
    height: 100vh;
    max-height: 100vh;
    width: ${DT.DEVICE_WIDTH};
    max-width: ${DT.DEVICE_WIDTH};
    border-radius: 0;
    background-color: transparent;
    .dialogContent {
      height: 100%;
      margin: ${DT.SPACE_6};
      padding: 0;
      background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
      border-radius: ${DT.BORDER_RADIUS_MD};
    }
    .heading {
      height: ${DT.SPACE_12};
      justify-content: center;
      text-align: center;
      padding: ${DT.SPACE_5} ${DT.SPACE_12};
    }
  }

  .heading {
    display: flex;
    align-items: center;
    gap: ${DT.SPACE_3};
    background-color: ${props =>
      handleBackgroundColor(props.color, false, true)};
    border-bottom: 1px solid
      ${props => handleBorderColor(props.color, true, true)};
    font-size: ${DT.FONT_SIZE_TITLE_MD};
    line-height: ${DT.LINE_HEIGHT_TITLE_MD};
    text-transform: uppercase;
    margin: 0;
    padding: ${DT.SPACE_5} ${DT.SPACE_10} ${DT.SPACE_5} ${DT.SPACE_6};
    position: relative;

    .account {
      display: flex;
      gap: ${DT.SPACE_2};
      align-items: center;
      text-transform: none;
      font-size: ${DT.FONT_SIZE_BODY_MD};
      position: absolute;
      top: 50%;
      transform: translateY(-50%) scale(1);
      left: ${DT.SPACE_6};
    }

    .button {
      display: block;
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%) scale(1);
      right: ${DT.SPACE_5};
      border-radius: 99px;
      padding: ${DT.SPACE_2};
      color: ${props => handleTextColor(props.color, true, true)};
      &:hover {
        background: ${props => handleBackgroundColor(props.color, true, true)};
        transform: translateY(-50%) scale(1.15);
      }
    }

    .name {
      flex-grow: 1;
    }

    .button--back {
      position: relative;
      top: auto;
      right: auto;
      transform: scale(1);
      svg {
        position: relative;
        left: 3px;
      }
      &:hover {
        transform: scale(1.15);
      }
    }
  }

  .dialogContent {
    margin: 0;
    padding: ${DT.SPACE_6};
    position: relative;
    overflow: auto;
  }

  p {
    margin: 0 0 ${DT.SPACE_4} 0;
  }
`;
