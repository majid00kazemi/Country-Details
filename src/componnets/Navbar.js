import { Container, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSo } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonReg } from "@fortawesome/free-regular-svg-icons";

function NavbarM({ toggleTheme, isDarkTheme, theme }) {
  function changeTheme() {
    toggleTheme();
  }

  return (
    <Navbar>
      <Container className="navbar-container">
        <Navbar.Brand href="#">Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant={theme} onClick={changeTheme}>
              <i className="me-2">
                {isDarkTheme ? (
                  <FontAwesomeIcon icon={faMoonSo} />
                ) : (
                  <FontAwesomeIcon icon={faMoonReg} />
                )}
              </i>
              Dark Mode
            </Button>{" "}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarM;
