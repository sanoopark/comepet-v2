import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      brand: string;
      normalWhite: string;
      normalBlack: string;
      normalRed: string;
      normalPink: string;
      normalOrange: string;
      normalGreen: string;
      normalGray: string;
      lightGray: string;
      lighterGray: string;
      lighterBlue: string;
      errorBg100: string;
      errorBg300: string;
      errorBg500: string;
      MISSING: string;
      COMPLETION: string;
      DETECTION: string;
      PROTECTION: string;
    };
    shadows: {
      light: string;
      normal: string;
    };
    sizes: {
      scrapCounter: {
        wrapper: {
          small: { width: string; height: string };
          medium: { width: string; height: string };
        };
        icon: { small: string; medium: string };
        font: { small: string; medium: string };
      };
      statusTag: {
        wrapper: {
          small: { width: string; height: string };
        };
      };
      label: {
        small: string;
        normal: string;
        large: string;
      };
    };
  }
}
