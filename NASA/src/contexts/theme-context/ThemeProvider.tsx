import { FC, useState, useEffect, PropsWithChildren } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const switchMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
