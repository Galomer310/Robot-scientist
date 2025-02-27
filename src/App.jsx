import React, { useState } from 'react';
import CardComponent from './CardComponent.jsx';
import robots from './robots.js';
import SearchBox from './SearchBox.jsx';

function App() {
  const [searchField, setSearchField] = useState(""); 
  const [filteredRobots, setFilteredRobots] = useState(robots); 

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);

    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue)
    );
    setFilteredRobots(filtered);
  };

  return (
    <>
      <h1 className="tc">Famous Robot Scientists</h1>
      <SearchBox searchField={searchField} onSearchChange={handleSearchChange} />
      <div className="flex flex-wrap justify-center">
        {filteredRobots.map((robot) => (
          <CardComponent
            key={robot.id} 
            id={robot.id} 
            name={robot.name} 
            username={robot.username} 
            scientificContribution={robot.scientificContribution}
            shortBio={robot.shortBio}
            wikipediaLink={robot.wikipediaLink}
          />
        ))}
      </div>
    </>
  );
}

export default App;
