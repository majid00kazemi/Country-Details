import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function DropDownButton({ theme, isDarkTheme }) {
  return (
    <div className="shadow">
      <DropdownButton
        variant="secondary"
        menuVariant={isDarkTheme ? theme : undefined}
        id="dropdown-menu-align-center"
        title="Filter by Region"
      >
        <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
        <Dropdown.Item href="#/action-2">America</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Europe</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Oceania</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropDownButton;
