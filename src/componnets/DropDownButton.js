import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function DropDownButton({ theme, isDarkTheme, activeName }) {
  return (
    <div className="shadow drop-container rounded">
      <DropdownButton
        variant="secondary"
        menuVariant={isDarkTheme ? theme : undefined}
        id="dropdown-menu-align-center"
        title={activeName ? activeName : "Filter by Region"}
      >
        <Link to={"/All"}>
          <div
            className={`dropdown-item ${
              activeName === "All" ? "active" : null
            } `}
          >
            All
          </div>
        </Link>

        <Link to={"/Africa"}>
          <div
            className={`dropdown-item ${
              activeName === "Africa" ? "active" : null
            } `}
          >
            Africa
          </div>
        </Link>

        <Link to={"/America"}>
          <div
            className={`dropdown-item ${
              activeName === "America" ? "active" : null
            } `}
          >
            America
          </div>
        </Link>

        <Link to={"/Asia"}>
          <div
            className={`dropdown-item ${
              activeName === "Asia" ? "active" : null
            } `}
          >
            Asia
          </div>
        </Link>

        <Link to={"/Europe"}>
          <div
            className={`dropdown-item ${
              activeName === "Europe" ? "active" : null
            } `}
          >
            Europe
          </div>
        </Link>

        <Link to={"/Oceania"}>
          <div
            className={`dropdown-item ${
              activeName === "Oceania" ? "active" : null
            } `}
          >
            Oceania
          </div>
        </Link>
      </DropdownButton>
    </div>
  );
}

export default DropDownButton;
