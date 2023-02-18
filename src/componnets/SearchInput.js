import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ theme, setQuery }) {
  const iconColor = theme === "light" ? "gray" : "white";

  function handleSearch(e) {
    setQuery(e.target.value);
  }

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
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchInput;
