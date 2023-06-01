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
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${DT.COLOR_BACKGROUND_LIGHT};
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
  input, select, button {
    font-family: inherit;
    font-size: inherit;
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
