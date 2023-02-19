import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function DropDownButton({ theme, isDarkTheme }) {
  return (
    <div className="shadow drop-container">
      <DropdownButton
        variant="secondary"
        menuVariant={isDarkTheme ? theme : undefined}
        id="dropdown-menu-align-center"
        title="Filter by Region"
      >
        <Dropdown.Item href="/Africa">Africa</Dropdown.Item>
        <Dropdown.Item href="/America">America</Dropdown.Item>
        <Dropdown.Item href="/Asia">Asia</Dropdown.Item>
        <Dropdown.Item href="/Europe">Europe</Dropdown.Item>
        <Dropdown.Item href="/Oceania">Oceania</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropDownButton;
