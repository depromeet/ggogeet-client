import "@emotion/react";
import type { ThemeExtends } from "@/src/styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeExtends {}
}
