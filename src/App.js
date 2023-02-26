import NavbarM from "./componnets/Navbar";
import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./componnets/HomePage";
import RegionPage from "./componnets/RegionPage";
import NotFound from "./componnets/NotFound";
import CountryPage from "./componnets/CountryPage";

export const ThemeContext = createContext(null);

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          return compareStrings(a.name.common, b.name.common);
        });

        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [query, setQuery] = useState();

  function filterCountriesByName(countries, query) {
    if (!query) {
      return countries;
    }

    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }

  const filteredCountries = filterCountriesByName(countries, query);

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
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" data-theme={theme}>
        <NavbarM
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          theme={theme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                isDarkTheme={isDarkTheme}
                setQuery={setQuery}
                filteredCountries={filteredCountries}
                query={query}
              />
            }
          />

          <Route
            path="/:region"
            element={<RegionPage theme={theme} isDarkTheme={isDarkTheme} />}
          />
          <Route path="/country/:country" element={<CountryPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
