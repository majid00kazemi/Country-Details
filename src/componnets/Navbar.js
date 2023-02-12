import { Container, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSo } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonReg } from "@fortawesome/free-regular-svg-icons";

function NavbarM({ toggleTheme, isDarkTheme, theme }) {
  function changeTheme() {
    toggleTheme();
  }

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Navbar className="navbar fixed-top shadow">
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
              {isDarkTheme ? (
                  `Light Mode`
                ) : (
                  `Dark Mode`
                )}
              
            </Button>{" "}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarM;
