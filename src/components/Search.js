import React from "react";

function Search({ userSearchInput, setUserSearchInput }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={userSearchInput}
        onChange={(e) => setUserSearchInput(e.target.value)} 
      /> 
    </div>
  );
}

export default Search;
