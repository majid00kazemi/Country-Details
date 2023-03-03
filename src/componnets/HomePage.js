import CreateCard from "./Card";
import Filter from "./Filter";

function HomePage({ theme, isDarkTheme, setQuery, filteredCountries, query }) {
  return (
    <>
      <Filter
        query={query}
        theme={theme}
        isDarkTheme={isDarkTheme}
        setQuery={setQuery}
      />
      <CreateCard countries={filteredCountries} setQuery={setQuery} />
    </>
  );
}

export default HomePage;
