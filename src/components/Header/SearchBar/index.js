import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./search-bar.scss";

const SearchBar = (props) => {
  const { placeholder } = props;

  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    const input = e.target.value;
    setSearchText(input);
    if (input.length > 2) {
      console.log(`searching ${input}`);
    }
  };
  return (
    <div>
      <input
        className="search-bar"
        placeholder={placeholder}
        value={searchText}
        onChange={handleSearchText}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Arama yap",
};

export default SearchBar;
