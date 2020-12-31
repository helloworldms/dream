import React, { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <ul>
      <h1>Youtube</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="search"
          onKeyPress={onKeyPress}
        ></input>
        <button type="submit" onClick={onClick}>
          search
        </button>
      </div>
    </ul>
  );
};

export default SearchBar;
