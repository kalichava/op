import { createGlobalStyle } from 'styled-components';
import { DesignTokens as DT } from './DesignTokens';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    &:focus-visible {
      outline: none;
    }
  }

  html,
  body {
    /* height: 100%; */
    width: 100%;
    font-size: ${DT.FONT_SIZE_BODY_LG};
    line-height: ${DT.LINE_HEIGHT_BODY_LG};
    color: ${DT.COLOR_GAMMA};
    margin: 0;
    background-color: ${DT.COLOR_BACKGROUND};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  body.fontLoaded {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    height: 100vh;
    max-width: 100%;
    overflow: scroll;
    position: relative;
  }

  .fullwidth {
    width: 100%;
  }

  .size100 {
    width: 100px !important;
  }

  .backdrop {
    background-color: ${DT.COLOR_GAMMA};
    opacity: .6;
    pointer-events: none;
    /* backdrop-filter: blur(4px); */
  }
  
  a {
    text-decoration: none;
    color: ${DT.COLOR_LINK};
    cursor: hand;
    transition: .3s;
  }
  a:hover {
    color: ${DT.COLOR_LINK_HOVER};
  }

  button {
    background-color: transparent;
    padding: 0;
  }

  .underline {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
  }

  .select { // Ariakit Select
    display: flex;
    align-items: center;
    gap: ${DT.SPACE_4};
    position: relative;
    z-index: 1;
    text-align: left;
    width: 100%;
    position: relative;
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    border: 1px solid ${DT.COLOR_BORDER_LIGHTER};
    border-radius: ${DT.BORDER_RADIUS_MD};
    padding: ${DT.SPACE_4} ${DT.SPACE_5};
    font-size: ${DT.FONT_SIZE_BODY_LG};
    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: ${DT.SPACE_4};
    }
  }

  .input { // Ariakit Input
    display: block;
    position: relative;
    text-align: left;
    width: 100%;
    position: relative;
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
    border: 1px solid ${DT.COLOR_BORDER_LIGHTER};
    border-radius: ${DT.BORDER_RADIUS_MD};
    padding: ${DT.SPACE_4} ${DT.SPACE_5};
    font-size: ${DT.FONT_SIZE_BODY_LG};
    color: ${DT.COLOR_TEXT};
    height: ${DT.SPACE_10};
  }

  .field {
    position: relative;
    label {
      display: inline-block;
      position: relative;
      border-bottom: 1px solid ${DT.COLOR_BACKGROUND_LIGHT};
      padding: 0 ${DT.SPACE_3};
      z-index: 2;
      top: 1px;
      left: ${DT.SPACE_3};
      font-size: ${DT.FONT_SIZE_BODY_SM};
    }
    button {
      width: 100%;
    }
    .popover {
      z-index: 999;
      width: 100%;
      background-color: ${DT.COLOR_BACKGROUND_LIGHT};
      border: 1px solid ${DT.COLOR_BORDER_LIGHTER};
      border-radius: ${DT.BORDER_RADIUS_MD};
      box-shadow: 0 ${DT.SPACE_3} ${DT.SPACE_3} rgba(0,0,0,.1);
      .option {
        color: ${DT.COLOR_LIGHTER};
        font-size: ${DT.FONT_SIZE_BODY_LG};
        padding: ${DT.SPACE_4} ${DT.SPACE_5};
        border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHTER};
        transition: .2s;
        cursor: pointer;
        .fi {
          margin-right: ${DT.SPACE_4};
        }
        &[aria-selected="true"] {
          background-color: ${DT.COLOR_BACKGROUND_DARKER};
          border-bottom: 1px solid ${DT.COLOR_BORDER_DARKER};
          color: ${DT.COLOR_TEXT};
          cursor: default;
          
          &:hover {
            background-color: ${DT.COLOR_BACKGROUND_DARKER};
          }
        }
        &:hover {
          color: ${DT.COLOR_TEXT};
          background-color: ${DT.COLOR_BACKGROUND};
          /* padding-left: ${DT.SPACE_6}; */
        }
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-position: outside;
    padding-left: ${DT.SPACE_6};
    margin: ${DT.SPACE_3} 0
  }

  li {
    padding-bottom: ${DT.SPACE_3};
  }

  .bold {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
  }

  .small {
    font-size: ${DT.FONT_SIZE_BODY_SM};
  }
  .smaller {
    font-size: ${DT.FONT_SIZE_BODY_MD};
  }

  .light {
    color: ${DT.COLOR_LIGHT}
  }
  .lighter {
    color: ${DT.COLOR_LIGHTER}
  }

  .bgWhite {
    background-color: white;
  }
  .bgLight {
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
  }
  .bgLighter {
    background-color: ${DT.COLOR_BACKGROUND_LIGHTER};
  }
  .bg {
    background-color: ${DT.COLOR_BACKGROUND};
  }
  .bgNone {
    background-color: transparent;
  }

  .borderBottom {
    border-bottom: 1px solid ${DT.COLOR_BORDER};
  }
  .borderBottomLight {
    border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHT};
  }
  .borderBottomLighter {
    border-bottom: 1px solid ${DT.COLOR_BORDER_LIGHTER};
  }
  .borderBottomNone {
    border-bottom: none;
  }
  
  .center {
    text-align: center;
  }

  .flex {
    display: flex;
  }
  .flexAlignCenter {
    align-items: center;
  }
  .flexAlignEnd {
    align-items: flex-end;
  }
  .flexAlignStart {
    align-items: flex-start;
  }
  .flexCenter {
    justify-content: center;
    align-items: center;
  }
  .flexColumn {
    flex-direction: column;
  }
  .flexGrow1 {
    flex-grow: 1;
  }
  .flexGrow0 {
    flex-grow: 0;
  }
  .flexGap1 {
    gap: ${DT.SPACE_1};
  }
  .flexGap2 {
    gap: ${DT.SPACE_2};
  }
  .flexGap3 {
    gap: ${DT.SPACE_3};
  }
  .flexGap4 {
    gap: ${DT.SPACE_4};
  }
  .flexGap5 {
    gap: ${DT.SPACE_5};
  }
  .flexGap6 {
    gap: ${DT.SPACE_6};
  }

  .addRight1 {
    margin-right: ${DT.SPACE_1};
  }
  .addRight2 {
    margin-right: ${DT.SPACE_2};
  }
  .addRight3 {
    margin-right: ${DT.SPACE_3};
  }
  .addRight4 {
    margin-right: ${DT.SPACE_4};
  }
  
  .addBottom1 {
    margin-bottom: ${DT.SPACE_1};
  }
  .addBottom2 {
    margin-bottom: ${DT.SPACE_2};
  }
  .addBottom3 {
    margin-bottom: ${DT.SPACE_3};
  }
  .addBottom4 {
    margin-bottom: ${DT.SPACE_4};
  }
  .addBottom5 {
    margin-bottom: ${DT.SPACE_5};
  }
  .addBottom6 {
    margin-bottom: ${DT.SPACE_6};
  }
  .addBottom7 {
    margin-bottom: ${DT.SPACE_7};
  }
  .addBottom8 {
    margin-bottom: ${DT.SPACE_8};
  }

  .addTop1 {
    margin-top: ${DT.SPACE_1};
  }
  .addTop2 {
    margin-top: ${DT.SPACE_2};
  }
  .addTop3 {
    margin-top: ${DT.SPACE_3};
  }
  .addTop4 {
    margin-top: ${DT.SPACE_4};
  }
  .addTop5 {
    margin-top: ${DT.SPACE_5};
  }
  .addTop6 {
    margin-top: ${DT.SPACE_6};
  }
  .addTop7 {
    margin-top: ${DT.SPACE_7};
  }
  .addTop8 {
    margin-top: ${DT.SPACE_8};
  }

  .add0Inside {
    padding: 0;
  }
  .add1Inside {
    padding: ${DT.SPACE_1};
  }
  .add2Inside {
    padding: ${DT.SPACE_2};
  }
  .add3Inside {
    padding: ${DT.SPACE_3};
  }
  .add4Inside {
    padding: ${DT.SPACE_4};
  }
  .add5Inside {
    padding: ${DT.SPACE_5};
  }
  .add6Inside {
    padding: ${DT.SPACE_6};
  }

  .addX1Inside {
    padding-left: ${DT.SPACE_1};
    padding-right: ${DT.SPACE_1};
  }
  .addX2Inside {
    padding-left: ${DT.SPACE_2};
    padding-right: ${DT.SPACE_2};
  }
  .addX3Inside {
    padding-left: ${DT.SPACE_3};
    padding-right: ${DT.SPACE_3};
  }
  .addX4Inside {
    padding-left: ${DT.SPACE_4};
    padding-right: ${DT.SPACE_4};
  }
  .addX5Inside {
    padding-left: ${DT.SPACE_5};
    padding-right: ${DT.SPACE_5};
  }
  .addX6Inside {
    padding-left: ${DT.SPACE_6};
    padding-right: ${DT.SPACE_6};
  }

  .addY1Inside {
    padding-top: ${DT.SPACE_1};
    padding-bottom: ${DT.SPACE_1};
  }
  .addY2Inside {
    padding-top: ${DT.SPACE_2};
    padding-bottom: ${DT.SPACE_2};
  }
  .addY3Inside {
    padding-top: ${DT.SPACE_3};
    padding-bottom: ${DT.SPACE_3};
  }
  .addY4Inside {
    padding-top: ${DT.SPACE_4};
    padding-bottom: ${DT.SPACE_4};
  }
  .addY5Inside {
    padding-top: ${DT.SPACE_5};
    padding-bottom: ${DT.SPACE_5};
  }
  .addY6Inside {
    padding-top: ${DT.SPACE_6};
    padding-bottom: ${DT.SPACE_6};
  }

  .colorAlpha {
    color: ${DT.COLOR_ALPHA};
  }
  .colorBeta {
    color: ${DT.COLOR_BETA};
  }
  .colorGamma {
    color: ${DT.COLOR_GAMMA};
  }
  .colorDelta {
    color: ${DT.COLOR_DELTA};
  }
  .colorEpsilon {
    color: ${DT.COLOR_EPSILON};
  }
  .colorZeta {
    color: ${DT.COLOR_ZETA};
  }
  .colorDiscount {
    color: ${DT.COLOR_DISCOUNT};
  }
  /*  */
  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: ${DT.COLOR_BORDER_LIGHTER};
    margin: 0;
  }

  .title {
    font-weight: ${DT.FONT_WEIGHT_BOLD};
    font-size: ${DT.FONT_SIZE_TITLE_LG};
    line-height: ${DT.LINE_HEIGHT_TITLE_LG};
    text-transform: uppercase;
    &.title--md {
      font-size: ${DT.FONT_SIZE_TITLE_MD};
      line-height: ${DT.LINE_HEIGHT_TITLE_MD};
    }
    &.title--sm {
      font-size: ${DT.FONT_SIZE_TITLE_SM};
      line-height: ${DT.LINE_HEIGHT_TITLE_SM};
    }
  }

  .lastChildNoBorder .item:last-child {
    border: none;
  }

  .section .sectionHeader {
    padding-top: ${DT.SPACE_7};
  }
`;
