import { Container } from "react-bootstrap";
import DropDownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

function Filter({ theme, isDarkTheme }) {
  return (
    <Container className="filter-container d-flex justify-content-between align-items-center">
      <SearchInput theme={theme} />
      <DropDownButton
        theme={theme}
        isDarkTheme={isDarkTheme}
        className="me-auto"
      />
    </Container>
  );
}
export default Filter;
