import NavbarM from "./componnets/Navbar";
import { createContext, useState } from "react";
import CreateCard from "./componnets/Card";
import Filter from "./componnets/Filter";

export const ThemeContext = createContext(null);

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const detectSystemTheme = () => {
    if (darkThemeMq.matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      return "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      return "light";
    }
  };
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", saved);
    return saved || detectSystemTheme();
  });
  const isDarkTheme = theme === "dark";

  darkThemeMq.addListener((e) => {
    if (e.matches) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  });

  const toggleTheme = () => {
    setTheme((current) => {
      localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
      document.documentElement.setAttribute(
        "data-theme",
        current === "light" ? "dark" : "light"
      );
      return current === "light" ? "dark" : "light";
    });
  };

  const [country, setCountry] = useState();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" data-theme={theme}>
        <NavbarM
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          theme={theme}
        />
        <Filter
          theme={theme}
          isDarkTheme={isDarkTheme}
          setCountry={setCountry}
        />
        <CreateCard country={country} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
