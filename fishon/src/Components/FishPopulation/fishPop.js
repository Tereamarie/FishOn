import React, { useState, useEffect } from 'react';

function FishPopulation() {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API
    fetch('fish_population.json')
      .then(response => response.json())
      .then(data => setFishData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Area</th>
          <th>Fish Population</th>
        </tr>
      </thead>
      <tbody>
        {fishData.map(fishPop => (
          <tr key={fishPop.area}>
            <td>{fishPop.area}</td>
            <td>{fishPop.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FishPopulation;