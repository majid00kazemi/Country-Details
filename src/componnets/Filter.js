import { Container } from "react-bootstrap";
import DropDownButton from "./DropDownButton";

function Filter({ theme, isDarkTheme }) {
  return (
    <Container>
      <DropDownButton theme={theme} isDarkTheme={isDarkTheme} />
    </Container>
  );
}
export default Filter;
