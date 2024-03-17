import React from "react";
import "./FloatSearch.css";

function FloatSearch() {
  return (
    <>
      <div className="darksoul-search-bar">
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
          placeholder="Search for book by name, category, or author"
          className="darksoul-search-input"
          autoComplete="on"
        />
      </div>
    </>
  );
}

export default FloatSearch;
