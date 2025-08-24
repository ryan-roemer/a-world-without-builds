// Nearform color palette
export const colors = {
  basics: {
    white: "#fff",
    black: "#000",
  },
  midnight: {
    base: "#000E38",
    80: "#0C3D60",
    50: "#526288",
    30: "#97A1B8",
    10: "#F4F8FA",
  },
  green: {
    base: "#00E5A4",
    80: "#33EAAE",
    50: "#78EEC5",
    30: "#B2F7E1",
    10: "#E5FCF5",
  },
  purple: {
    base: "#8950FF",
    80: "#A173FF",
    50: "#C4A7FF",
    30: "#DCCAFF",
    10: "#F3EDFF",
  },
  blue: {
    base: "#166bff",
    80: "#4589FF",
    50: "#8AB5FF",
    30: "#B9D3FF",
    10: "#E8F0FF",
  },
  grey: {
    10: "#EAEBED",
    30: "#D9D9D9",
    80: "#454551",
  },
};

// Nearform theme
export const theme = {
  colors: {
    primary: colors.basics.white,
    secondary: colors.green[50],
    tertiary: colors.midnight[80],
    quaternary: colors.purple[30],
    quinary: colors.grey[10],
  },
  fonts: {
    header: "'Inter', sans-serif;",
    text: "'Inter', sans-serif;",
  },
};
