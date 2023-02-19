import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateCard from "./Card";
import Filter from "./Filter";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}

function RegionPage({ isDarkTheme, theme }) {
  const [countries, setCountries] = useState();

  const params = useParams();

  const [activeName, setActiveName] = useState(params.region);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${params.region}`)
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

  function handelActive() {
    setActiveName(params.region);
  }
  console.log(activeName);
  const filteredCountries = filterCountriesByName(countries, query);
  return (
    <>
      <Filter
        theme={theme}
        isDarkTheme={isDarkTheme}
        setQuery={setQuery}
        activeName={activeName}
      />
      <CreateCard countries={filteredCountries} />
    </>
  );
}
export default RegionPage;
