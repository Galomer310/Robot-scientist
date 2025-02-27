import React from 'react'; 

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="tc">
      <input
        type="search"        
        placeholder="Search robots by name"
        className="pa3 ba b--green bg-lightest-blue"
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
