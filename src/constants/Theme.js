import { MD3LightTheme } from "react-native-paper";

const Theme = {
  ...MD3LightTheme,
  colors: {
    primary: "#0d98ba",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "#e8f3f5",
    onPrimaryContainer: "rgb(56, 0, 56)",
    secondary: "rgb(109, 88, 105)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(248, 238, 242)",
    onSecondaryContainer: "rgb(39, 22, 36)",
    tertiary: "rgb(130, 83, 69)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 219, 209)",
    onTertiaryContainer: "rgb(50, 18, 8)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(30, 26, 29)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(30, 26, 29)",
    surfaceVariant: "rgb(238, 222, 231)",
    onSurfaceVariant: "rgb(78, 68, 75)",
    outline: "#0d98ba",
    outlineVariant: "rgb(209, 194, 203)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(52, 47, 50)",
    inverseOnSurface: "rgb(248, 238, 242)",
    inversePrimary: "rgb(255, 170, 243)",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 241, 250)",
      level2: "rgb(247, 234, 247)",
      level3: "rgb(244, 228, 244)",
      level4: "rgb(243, 226, 243)",
      level5: "rgb(241, 222, 241)",
    },
    surfaceDisabled: "rgba(13, 152, 186, .5)", //rgba(30, 26, 29, 0.12)
    onSurfaceDisabled: "rgba(30, 26, 29, 0.38)",
    backdrop: "rgba(55, 46, 52, 0.4)",
  },
  spacings: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export default Theme;
