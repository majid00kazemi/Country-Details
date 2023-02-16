import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function DropDownButton({ theme, isDarkTheme }) {
  return (
    <div className="shadow">
      <DropdownButton
        variant="secondary"
        menuVariant={isDarkTheme ? theme : undefined}
        id="dropdown-menu-align-center"
        title="Dropdown Button"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropDownButton;
