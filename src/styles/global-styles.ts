import { createGlobalStyle } from 'styled-components';
import { DesignTokens as DT } from './DesignTokens';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    max-width: 428px;
    font-size: ${DT.FONT_SIZE_BODY_LG};
    line-height: ${DT.LINE_HEIGHT_BODY_LG};
    color: ${DT.COLOR_GAMMA};
    margin: 0;
    background-color: white;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: ${DT.LINE_HEIGHT_BODY_LG};
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
  .center {
    text-align: center;
  }

  .flex {
    display: flex;
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
`;
