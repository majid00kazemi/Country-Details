import { Container } from "react-bootstrap";
import DropDownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

function Filter({
  theme,
  isDarkTheme,
  setCountry,
  setQuery,
  activeName,
  query,
}) {
  return (
    <Container className="filter-container  d-flex justify-content-between align-items-center flex-wrap">
      <SearchInput
        theme={theme}
        setCountry={setCountry}
        setQuery={setQuery}
        query={query}
      />
      <DropDownButton
        theme={theme}
        activeName={activeName}
        isDarkTheme={isDarkTheme}
        className="me-auto"
      />
    </Container>
  );
}
export default Filter;
