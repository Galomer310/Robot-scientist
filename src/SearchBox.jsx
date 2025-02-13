import React from 'react'; 

const SearchBox = ({ searchField, onSearchChange }) => {

  return (
    <div className="tc">
      
      <input
        type="search"        
        placeholder="Search robots by name"
        className="pa3 ba b--green bg-lightest-blue"
        // - `pa3`: Padding.
        // - `ba`: Adds a border.
        // - `b--green`: Sets the border color to green.
        // - `bg-lightest-blue`: Sets the background color to a light blue shade.
        value={searchField}
        // Binds the current value of the input to the `searchField` prop, making it a controlled component.
        
        onChange={onSearchChange}
        // Attaches an event handler to the `onChange` event, calling the `onSearchChange` function whenever the input value changes.
      />
    </div>
  );
};

export default SearchBox;
