import { DesignTokens as DT } from 'styles/DesignTokens';

export const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const handleBackgroundColor = (color, hover = false) => {
  switch (color) {
    case 'alpha':
      return hover ? DT.COLOR_ALPHA_DARKER_10 : DT.COLOR_ALPHA;
    case 'beta':
      return hover ? DT.COLOR_BETA_DARKER_10 : DT.COLOR_BETA;
    case 'gamma':
      return hover ? DT.COLOR_GAMMA_DARKER_10 : DT.COLOR_GAMMA;
    case 'delta':
      return hover ? DT.COLOR_DELTA_DARKER_10 : DT.COLOR_DELTA;
    case 'epsilon':
      return hover ? DT.COLOR_EPSILON_DARKER_10 : DT.COLOR_EPSILON;
    case 'zeta':
      return hover ? DT.COLOR_ZETA_DARKER_10 : DT.COLOR_ZETA;
    default:
      return '#fff';
  }
};

export const handleTextColor = (color, hover = false) => {
  switch (color) {
    case 'alpha':
    case 'beta':
    case 'gamma':
    case 'delta':
    case 'epsilon':
    case 'zeta':
      return '#FFF';
    default:
      return hover ? DT.COLOR_BETA : DT.COLOR_BETA_DARKER_10;
  }
};
