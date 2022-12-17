const theme = {
  colors: {
    white: "#ffffff",
    navy: "#1C1D22",
    navy70: "#26272EB3", // opacity 70
    navy50: "#26272E80", // opacity 50
    navy30: "#26272E4D", // opacity 30
    navy10: "#26272E1A", // opacity 10
    yellow: "#FFF53E",
    purple: "#9E8AFF",
    beige: "#F9F7D8",
    blue: "#648DF5",
    green: "#37BFA8",
    red: "#F6523D",
    gray1: "#E3E3E7",
    gray2: "#C1C2CA",
    gray3: "#878994",
    gray4: "#5B5D68",
    gray5: "#3E4049",
    gray6: "#2C2E36",
    background: "#F8F8F9",
  },
  radius: {
    sm: "2px",
    md: "8px",
    full: "100px",
  },
  spacing: [
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
    "36px",
    "40px",
    "48px",
    "52px",
    "56px",
    "60px",
  ],
  grid: {
    maxWidth: "428px",
    baseWidth: "360px",
  },
} as const;

export type ThemeExtends = typeof theme;
export default theme;
