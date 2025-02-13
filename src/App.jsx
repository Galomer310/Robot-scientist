import React, { useState } from 'react';
import CardComponent from './CardComponent.jsx';
import robots from './robots.js';
import SearchBox from './SearchBox.jsx';

function App() {

  const [searchField, setSearchField] = useState(""); 
  const [filteredRobots, setFilteredRobots] = useState(robots); 

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    // Get the search input value and convert it to lowercase to make the search case-insensitive.

    setSearchField(searchValue);

    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue)
    );
    // Filter the `robots` array to only include robots whose names match the search input.
    // It uses `toLowerCase` to make the comparison case-insensitive.

    setFilteredRobots(filtered);
  };

  return (
    <>
      <h1 className="tc">Famous Robot Scientists</h1>

      {/* SearchBox Component */}
      <SearchBox searchField={searchField} onSearchChange={handleSearchChange} />
      {/* Render the `SearchBox` component, passing the current search input and the `handleSearchChange` function as props. */}
      <div className="flex flex-wrap justify-center">
        {filteredRobots.map((robot) => (
          <CardComponent
            key={robot.id} 
            id={robot.id} 
            name={robot.name} 
            username={robot.username} 
            email={robot.email} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
