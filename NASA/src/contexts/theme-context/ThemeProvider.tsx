import { FC, useState, useEffect, PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

  const switchMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
