import React from "react";

const SearchBar = ({ setSearchText, setCurrentPage }) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };
  return (
    <div className="search-bar-component">
      <input
        type="text"
        placeholder="Taper ici votre recherche"
        onChange={(event) => handleSearchChange(event)}
      />
    </div>
  );
};

export default SearchBar;
