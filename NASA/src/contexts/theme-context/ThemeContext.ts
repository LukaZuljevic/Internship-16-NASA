import { createContext } from "react";
import { ThemeContextType } from "../../types/ThemeContextType.ts";

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  switchMode: () => {},
});
