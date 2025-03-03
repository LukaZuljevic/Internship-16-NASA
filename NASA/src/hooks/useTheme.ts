import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

type ThemeContextType = {
  isDarkMode: boolean;
  switchMode: () => void;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a theme provier");

  return context;
};
