import Form from "react-bootstrap/Form";

function SearchInput({ theme }) {
  return (
    <div className="shadow">
        
      <Form.Control
        className={`search-bar bg-${theme}`}
        type="text"
        placeholder="Large text"
      />
    </div>
  );
}

export default SearchInput;
