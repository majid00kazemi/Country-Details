import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function DropDownButton({ theme, isDarkTheme, activeName }) {
  return (
    <div className="shadow drop-container rounded">
      <DropdownButton
        variant="secondary"
        menuVariant={isDarkTheme ? theme : undefined}
        id="dropdown-menu-align-center"
        title={activeName ? activeName : "Filter by Region"}
      >
        <Dropdown.Item href="/" active={activeName === undefined}>
          All
        </Dropdown.Item>
        <Dropdown.Item href="/Africa" active={activeName === "Africa"}>
          Africa
        </Dropdown.Item>
        <Dropdown.Item href="/America" active={activeName === "America"}>
          America
        </Dropdown.Item>
        <Dropdown.Item href="/Asia" active={activeName === "Asia"}>
          Asia
        </Dropdown.Item>
        <Dropdown.Item href="/Europe" active={activeName === "Europe"}>
          Europe
        </Dropdown.Item>
        <Dropdown.Item href="/Oceania" active={activeName === "Oceania"}>
          Oceania
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropDownButton;
