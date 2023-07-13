import { DesignTokens as DT } from 'styles/DesignTokens';

export const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const handleBackgroundColor = (color, mod = false, inversed = false) => {
  switch (color) {
    case 'alpha':
      if (inversed) {
        return mod ? DT.COLOR_ALPHA_LIGHTER_70 : DT.COLOR_ALPHA_LIGHTER_90;
      }
      return mod ? DT.COLOR_ALPHA : DT.COLOR_ALPHA_LIGHTER_10;

    case 'beta':
      if (inversed) {
        return mod ? DT.COLOR_BETA_LIGHTER_70 : DT.COLOR_BETA_LIGHTER_90;
      }
      return mod ? DT.COLOR_BETA : DT.COLOR_BETA_LIGHTER_10;

    case 'gamma':
      if (inversed) {
        return mod ? DT.COLOR_GAMMA_LIGHTER_70 : DT.COLOR_GAMMA_LIGHTER_90;
      }
      return mod ? DT.COLOR_GAMMA : DT.COLOR_GAMMA_LIGHTER_10;

    case 'delta':
      if (inversed) {
        return mod ? DT.COLOR_DELTA_LIGHTER_70 : DT.COLOR_DELTA_LIGHTER_90;
      }
      return mod ? DT.COLOR_DELTA : DT.COLOR_DELTA_LIGHTER_10;

    case 'epsilon':
      if (inversed) {
        return mod ? DT.COLOR_EPSILON_LIGHTER_70 : DT.COLOR_EPSILON_LIGHTER_90;
      }
      return mod ? DT.COLOR_EPSILON_DARKER_10 : DT.COLOR_EPSILON;

    case 'zeta':
      if (inversed) {
        return mod ? DT.COLOR_ZETA_LIGHTER_70 : DT.COLOR_ZETA_LIGHTER_90;
      }
      return mod ? DT.COLOR_ZETA_DARKER_10 : DT.COLOR_ZETA;

    default:
      if (inversed) {
        return mod ? DT.COLOR_BACKGROUND_LIGHT : 'white';
      }
      return mod ? DT.COLOR_BACKGROUND_LIGHT : 'white';
  }
};

export const handleTextColor = (color, mod = false, inversed = false) => {
  switch (color) {
    case 'alpha':
      if (inversed) {
        return mod ? DT.COLOR_ALPHA_DARKER_60 : DT.COLOR_ALPHA_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_ALPHA_LIGHTER_95;
    case 'beta':
      if (inversed) {
        return mod ? DT.COLOR_BETA_DARKER_60 : DT.COLOR_BETA_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_BETA_LIGHTER_95;
    case 'gamma':
      if (inversed) {
        return mod ? DT.COLOR_GAMMA_DARKER_60 : DT.COLOR_GAMMA_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_GAMMA_LIGHTER_95;

    case 'delta':
      if (inversed) {
        return mod ? DT.COLOR_DELTA_DARKER_60 : DT.COLOR_DELTA_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_DELTA_LIGHTER_95;

    case 'epsilon':
      if (inversed) {
        return mod ? DT.COLOR_EPSILON_DARKER_60 : DT.COLOR_EPSILON_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_EPSILON_LIGHTER_95;

    case 'zeta':
      if (inversed) {
        return mod ? DT.COLOR_ZETA_DARKER_60 : DT.COLOR_ZETA_DARKER_50;
      }
      return mod ? '#fff' : DT.COLOR_ZETA_LIGHTER_95;

    default:
      if (inversed) {
        return mod ? DT.COLOR_BETA_DARKER_20 : DT.COLOR_BETA;
      }
      return mod ? '#fff' : DT.COLOR_BETA_LIGHTER_95;
  }
};

export const handleBorderColor = (color, mod = false, inversed = false) => {
  switch (color) {
    case 'alpha':
      if (inversed) {
        return mod ? DT.COLOR_ALPHA_LIGHTER_70 : DT.COLOR_ALPHA_LIGHTER_80;
      }
      return mod ? DT.COLOR_ALPHA_DARKER_30 : DT.COLOR_ALPHA_DARKER_10;
    case 'beta':
      if (inversed) {
        return mod ? DT.COLOR_BETA_LIGHTER_70 : DT.COLOR_BETA_LIGHTER_80;
      }
      return mod ? DT.COLOR_BETA_DARKER_30 : DT.COLOR_BETA_DARKER_10;
    case 'gamma':
      if (inversed) {
        return mod ? DT.COLOR_GAMMA_LIGHTER_70 : DT.COLOR_GAMMA_LIGHTER_80;
      }
      return mod ? DT.COLOR_GAMMA_DARKER_30 : DT.COLOR_GAMMA_DARKER_10;

    case 'delta':
      if (inversed) {
        return mod ? DT.COLOR_DELTA_LIGHTER_70 : DT.COLOR_DELTA_LIGHTER_80;
      }
      return mod ? DT.COLOR_DELTA_DARKER_30 : DT.COLOR_DELTA_DARKER_10;

    case 'epsilon':
      if (inversed) {
        return mod ? DT.COLOR_EPSILON_LIGHTER_70 : DT.COLOR_EPSILON_LIGHTER_80;
      }
      return mod ? DT.COLOR_EPSILON_LIGHTER_30 : DT.COLOR_EPSILON_LIGHTER_50;

    case 'zeta':
      if (inversed) {
        return mod ? DT.COLOR_ZETA_LIGHTER_70 : DT.COLOR_ZETA_LIGHTER_80;
      }
      return mod ? DT.COLOR_ZETA_DARKER_30 : DT.COLOR_ZETA_DARKER_10;

    default:
      if (inversed) {
        return mod ? DT.COLOR_BORDER_LIGHTER : DT.COLOR_BORDER_LIGHT;
      }
      return mod ? DT.COLOR_BORDER_LIGHT : DT.COLOR_BORDER_LIGHTER;
  }
};

export const handleColor = (
  color: string = 'alpha',
  mode: string = 'lighter',
  amount: number = 0,
) => {
  switch (color) {
    case 'alpha':
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_ALPHA_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_ALPHA_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_ALPHA_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_ALPHA_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_ALPHA_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_ALPHA_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_ALPHA_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_ALPHA_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_ALPHA_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_ALPHA_LIGHTER_95;
        else return DT.COLOR_ALPHA;
      } else {
        if (amount === 10) return DT.COLOR_ALPHA_DARKER_10;
        else if (amount === 20) return DT.COLOR_ALPHA_DARKER_20;
        else if (amount === 30) return DT.COLOR_ALPHA_DARKER_30;
        else if (amount === 40) return DT.COLOR_ALPHA_DARKER_40;
        else if (amount === 50) return DT.COLOR_ALPHA_DARKER_50;
        else if (amount === 60) return DT.COLOR_ALPHA_DARKER_60;
        else if (amount === 70) return DT.COLOR_ALPHA_DARKER_70;
        else if (amount === 80) return DT.COLOR_ALPHA_DARKER_80;
        else if (amount === 90) return DT.COLOR_ALPHA_DARKER_90;
        else if (amount === 95) return DT.COLOR_ALPHA_DARKER_95;
        else return DT.COLOR_ALPHA;
      }

    case 'gamma':
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_GAMMA_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_GAMMA_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_GAMMA_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_GAMMA_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_GAMMA_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_GAMMA_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_GAMMA_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_GAMMA_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_GAMMA_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_GAMMA_LIGHTER_95;
        else return DT.COLOR_GAMMA;
      } else {
        if (amount === 10) return DT.COLOR_GAMMA_DARKER_10;
        else if (amount === 20) return DT.COLOR_GAMMA_DARKER_20;
        else if (amount === 30) return DT.COLOR_GAMMA_DARKER_30;
        else if (amount === 40) return DT.COLOR_GAMMA_DARKER_40;
        else if (amount === 50) return DT.COLOR_GAMMA_DARKER_50;
        else if (amount === 60) return DT.COLOR_GAMMA_DARKER_60;
        else if (amount === 70) return DT.COLOR_GAMMA_DARKER_70;
        else if (amount === 80) return DT.COLOR_GAMMA_DARKER_80;
        else if (amount === 90) return DT.COLOR_GAMMA_DARKER_90;
        else if (amount === 95) return DT.COLOR_GAMMA_DARKER_95;
        else return DT.COLOR_GAMMA;
      }

    case 'delta':
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_DELTA_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_DELTA_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_DELTA_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_DELTA_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_DELTA_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_DELTA_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_DELTA_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_DELTA_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_DELTA_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_DELTA_LIGHTER_95;
        else return DT.COLOR_DELTA;
      } else {
        if (amount === 10) return DT.COLOR_DELTA_DARKER_10;
        else if (amount === 20) return DT.COLOR_DELTA_DARKER_20;
        else if (amount === 30) return DT.COLOR_DELTA_DARKER_30;
        else if (amount === 40) return DT.COLOR_DELTA_DARKER_40;
        else if (amount === 50) return DT.COLOR_DELTA_DARKER_50;
        else if (amount === 60) return DT.COLOR_DELTA_DARKER_60;
        else if (amount === 70) return DT.COLOR_DELTA_DARKER_70;
        else if (amount === 80) return DT.COLOR_DELTA_DARKER_80;
        else if (amount === 90) return DT.COLOR_DELTA_DARKER_90;
        else if (amount === 95) return DT.COLOR_DELTA_DARKER_95;
        else return DT.COLOR_DELTA;
      }

    case 'epsilon':
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_EPSILON_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_EPSILON_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_EPSILON_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_EPSILON_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_EPSILON_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_EPSILON_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_EPSILON_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_EPSILON_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_EPSILON_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_EPSILON_LIGHTER_95;
        else return DT.COLOR_EPSILON;
      } else {
        if (amount === 10) return DT.COLOR_EPSILON_DARKER_10;
        else if (amount === 20) return DT.COLOR_EPSILON_DARKER_20;
        else if (amount === 30) return DT.COLOR_EPSILON_DARKER_30;
        else if (amount === 40) return DT.COLOR_EPSILON_DARKER_40;
        else if (amount === 50) return DT.COLOR_EPSILON_DARKER_50;
        else if (amount === 60) return DT.COLOR_EPSILON_DARKER_60;
        else if (amount === 70) return DT.COLOR_EPSILON_DARKER_70;
        else if (amount === 80) return DT.COLOR_EPSILON_DARKER_80;
        else if (amount === 90) return DT.COLOR_EPSILON_DARKER_90;
        else if (amount === 95) return DT.COLOR_EPSILON_DARKER_95;
        else return DT.COLOR_EPSILON;
      }

    case 'zeta':
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_ZETA_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_ZETA_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_ZETA_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_ZETA_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_ZETA_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_ZETA_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_ZETA_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_ZETA_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_ZETA_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_ZETA_LIGHTER_95;
        else return DT.COLOR_ZETA;
      } else {
        if (amount === 10) return DT.COLOR_ZETA_DARKER_10;
        else if (amount === 20) return DT.COLOR_ZETA_DARKER_20;
        else if (amount === 30) return DT.COLOR_ZETA_DARKER_30;
        else if (amount === 40) return DT.COLOR_ZETA_DARKER_40;
        else if (amount === 50) return DT.COLOR_ZETA_DARKER_50;
        else if (amount === 60) return DT.COLOR_ZETA_DARKER_60;
        else if (amount === 70) return DT.COLOR_ZETA_DARKER_70;
        else if (amount === 80) return DT.COLOR_ZETA_DARKER_80;
        else if (amount === 90) return DT.COLOR_ZETA_DARKER_90;
        else if (amount === 95) return DT.COLOR_ZETA_DARKER_95;
        else return DT.COLOR_ZETA;
      }

    case 'beta':
    default:
      if (mode === 'lighter') {
        if (amount === 10) return DT.COLOR_BETA_LIGHTER_10;
        else if (amount === 20) return DT.COLOR_BETA_LIGHTER_20;
        else if (amount === 30) return DT.COLOR_BETA_LIGHTER_30;
        else if (amount === 40) return DT.COLOR_BETA_LIGHTER_40;
        else if (amount === 50) return DT.COLOR_BETA_LIGHTER_50;
        else if (amount === 60) return DT.COLOR_BETA_LIGHTER_60;
        else if (amount === 70) return DT.COLOR_BETA_LIGHTER_70;
        else if (amount === 80) return DT.COLOR_BETA_LIGHTER_80;
        else if (amount === 90) return DT.COLOR_BETA_LIGHTER_90;
        else if (amount === 95) return DT.COLOR_BETA_LIGHTER_95;
        else return DT.COLOR_BETA;
      } else {
        if (amount === 10) return DT.COLOR_BETA_DARKER_10;
        else if (amount === 20) return DT.COLOR_BETA_DARKER_20;
        else if (amount === 30) return DT.COLOR_BETA_DARKER_30;
        else if (amount === 40) return DT.COLOR_BETA_DARKER_40;
        else if (amount === 50) return DT.COLOR_BETA_DARKER_50;
        else if (amount === 60) return DT.COLOR_BETA_DARKER_60;
        else if (amount === 70) return DT.COLOR_BETA_DARKER_70;
        else if (amount === 80) return DT.COLOR_BETA_DARKER_80;
        else if (amount === 90) return DT.COLOR_BETA_DARKER_90;
        else if (amount === 95) return DT.COLOR_BETA_DARKER_95;
        else return DT.COLOR_BETA;
      }
  }
};

export const handleIconSize = variant => {
  switch (variant) {
    case 'LG':
      return 18;
    case 'SM':
      return 14;
    default:
      return 16;
  }
};
