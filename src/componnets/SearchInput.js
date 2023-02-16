import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ theme, onQueryChange }) {
  const iconColor = theme === "light" ? "gray" : "white";
  const handleQueryChange = (event) => {
    onQueryChange(event.target.value);
  };
  return (
    <div className="shadow rounded search-container">
      <div className={`search-bar rounded bg-${theme}`}>
        <FontAwesomeIcon
          className="search-icon"
          icon={faSearch}
          style={{ color: iconColor }}
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
}

export default SearchInput;
