import { FC, useState, useEffect, PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "../../hooks";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setItemToStorage, getItemFromStorage } = useLocalStorage();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return getItemFromStorage("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      setItemToStorage("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      setItemToStorage("theme", "light");
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
