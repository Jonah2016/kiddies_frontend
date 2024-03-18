import React, { useState } from "react";
import "./FloatSearch.css";

function FloatSearch({ onChangeSearchCallback }) {
  const [value, setValue] = useState("");

  // handler function that will update the state when the input changes
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeSearchCallback && onChangeSearchCallback(inputValue);
  };

  return (
    <>
      <div className="float_search_bar">
        <img
          className="search-icon"
          src="https://darksoul-codepen.github.io/search-icon.png"
          width={50}
          height={50}
          alt="search"
        />
        <input
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          placeholder="Search for book by name, category, or author"
          className="float_search_input"
          autoComplete="on"
        />
      </div>
    </>
  );
}

export default FloatSearch;
