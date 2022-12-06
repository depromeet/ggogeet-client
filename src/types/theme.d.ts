import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      white: string;
      primary: string;
      dark: string;
      light: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      background: string;
    };
  }
}
