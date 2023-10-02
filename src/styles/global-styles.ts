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

  .underline {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  /* Forms */

  button {
    background-color: transparent;
    padding: 0;
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

  .input,
  .select,
  .textarea {
    background-color: ${DT.BG};
    border: 1px solid ${DT.COLOR_BORDER_LIGHTER};
    border-radius: ${DT.BORDER_RADIUS_MD};
    color: ${DT.COLOR_TEXT};
    font-size: ${DT.FONT_SIZE_BODY_LG};
    position: relative;
    z-index: 1;
    text-align: left;
    width: 100%;
    padding: ${DT.SPACE_4} ${DT.SPACE_5};
    transition: all .2s;

    &:hover {
      border-color: ${DT.BASE_SURFACE_BORDER_MOD};
    }

    &:focus,
    &[aria-expanded=true] {
      border-color: ${DT.BASE_ELEVATED_BORDER_MOD};
      outline: ${DT.SPACE_1} solid ${DT.BASE_BORDER_MOD};
    }
  }

  .select { // Ariakit Select
    display: flex;
    align-items: center;
    gap: ${DT.SPACE_4};
    .arrows {
      width: 28px;
      height: 28px;
      border-radius: 14px;
      background-color: ${DT.BASE_BG};
      position: absolute;
      top: 50%;
      right: ${DT.SPACE_3};
      transform: translateY(-50%);
      transition: .2s;

      .arrow {
        width: 4px;
        margin: 1px 0 0 -2px;
        height: 1.25rem;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
        span {
          top: 0.5rem;
          position: absolute;
          width: 9px;
          height: 2px;
          background-color: ${DT.COLOR_TEXT};
          display: inline-block;
          transition: all 0.2s ease;
          border-radius: 25px;
          &:first-of-type {
            left: 0;
            transform: rotate(-45deg);
          }
          &:last-of-type {
            right: 0;
            transform: rotate(45deg);
          }
        }
      }      
      &:hover {
        background-color: ${DT.BASE_BG_MOD};
      }
    }
    &[aria-expanded=true] {
        .arrows .arrow {
          span {
            &:first-of-type {
              transform: rotate(45deg);
            }
            &:last-of-type {
              transform: rotate(-45deg);
            }
          }
        }
      }

  }

  .input { // Ariakit Input
    display: block;
    height: ${DT.SPACE_10};

    &::autofill {}
    /* Matches when an <input> has been autofilled by the browser. */

    &::enabled {}
    /* Represents a user interface element that is in an enabled state. */

    &::disabled {}
    /* Represents a user interface element that is in a disabled state. */

    &::read-only {}
    /* Represents any element that cannot be changed by the user. */

    &::read-write {}
    /* Represents any element that is user-editable. */

    &::placeholder-shown {}
    /* Matches an input element that is displaying placeholder text. For example, it will match the placeholder attribute in the <input> and <textarea> elements. */

    &::default {}
    /* Matches one or more UI elements that are the default among a set of elements. */

    &::checked {}
    /* Matches when elements such as checkboxes and radio buttons are toggled on. */

    &::indeterminate {}
    /* Matches UI elements when they are in an indeterminate state. */

    &::blank {}
    /* Matches a user-input element which is empty, containing an empty string or other null input. */

    &::valid {}
    /* Matches an element with valid contents. For example, an input element with the type 'email' that contains a validly formed email address or an empty value if the control is not required. */

    &::invalid {}
    /* Matches an element with invalid contents. For example, an input element with type 'email' with a name entered. */

    &::in-range {}
    /* Applies to elements with range limitations. For example, a slider control when the selected value is in the allowed range. */

    &::out-of-range {}
    /* Applies to elements with range limitations. For example, a slider control when the selected value is outside the allowed range. */

    &::required {}
    /* Matches when a form element is required. */

    &::optional {}
    /* Matches when a form element is optional. */

    &::user-invalid {}
    /* Represents an element with incorrect input, but only when the user has interacted with it. */


  }

  .field {
    position: relative;
    label {
      display: inline-block;
      position: relative;
      border-bottom: 1px solid ${DT.COLOR_BACKGROUND_LIGHT};
      padding: 0 ${DT.SPACE_2};
      z-index: 2;
      top: 1px;
      left: ${DT.SPACE_3};
      font-size: ${DT.FONT_SIZE_BODY_SM};
      background-color: ${DT.BG};
    }

    button {
      width: 100%;
    }

    .popover {
      z-index: 999;
      width: 100%;
      background-color: ${DT.BG};
      border: none;
      border-radius: ${DT.BORDER_RADIUS_MD};
      box-shadow: 0 ${DT.SPACE_3} ${DT.SPACE_3} rgba(0,0,0,.1);
      margin-top: ${DT.SPACE_2};
      overflow: hidden;
      .option {
        color: ${DT.COLOR_LIGHTER};
        font-size: ${DT.FONT_SIZE_BODY_LG};
        padding: ${DT.SPACE_4} ${DT.SPACE_5};
        border-bottom: 1px solid ${DT.NEUTRAL_BORDER};
        transition: .2s;
        cursor: pointer;
        .fi {
          margin-right: ${DT.SPACE_4};
        }
        &[aria-selected="true"] {
          position: relative;
          background-color: ${DT.BASE_SURFACE_BG};
          border-bottom: 1px solid ${DT.BASE_SURFACE_BORDER};
          color: ${DT.COLOR_TEXT};
          cursor: default;
          
          &:hover {
            background-color: ${DT.SECONDARY_SURFACE_BG_MOD};
            border-bottom: 1px solid ${DT.SECONDARY_SURFACE_BORDER_MOD};
          }
          
          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 24px;
            height: 24px;
            top: 50%;
            transform: translateY(-50%);
            right: ${DT.SPACE_4};
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjMzQzQzQ3IiBkPSJNOSAxNi4xNyA0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDFMOSAxNi4xN1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+);
          }

          
        }

        &:hover {
          color: ${DT.COLOR_TEXT};
          background-color: ${DT.SECONDARY_SURFACE_BG_MOD};
          border-bottom: 1px solid ${DT.SECONDARY_SURFACE_BORDER_MOD};
        }

        &:last-child,
        &:last-child:hover { border-bottom: none; }
      }
    }
  }

  .formRow {
    min-height: 64px;
  }

  .secondaryInputText {
    padding: ${DT.SPACE_1} ${DT.SPACE_5};
    color: ${DT.COLOR_LIGHTER};
  }

  /* Lists */

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
  .halfWidth {
    width: 50%;
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
