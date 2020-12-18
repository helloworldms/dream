// import React from "react";
import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
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
    <header className={styles.header}>
      <div className={styles.logo}>
        <img calssName={styles.img} src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        onKeyPress={onKeyPress}
        className={styles.input}
        type="search"
        name="search"
        placeholder="search"
        // onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button} type="search" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
