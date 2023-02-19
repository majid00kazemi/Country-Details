import CreateCard from "./Card";
import Filter from "./Filter";

function HomePage({ theme, isDarkTheme, setQuery, filteredCountries }) {
  return (
    <>
      <Filter theme={theme} isDarkTheme={isDarkTheme} setQuery={setQuery} />
      <CreateCard countries={filteredCountries} />
    </>
  );
}

export default HomePage;
