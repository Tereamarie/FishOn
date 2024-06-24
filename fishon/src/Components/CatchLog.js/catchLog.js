import React, { useState } from 'react';

function CatchLog() {
  const [catches, setCatches] = useState([]); // Array to store catch data

  // Function to add a new catch
  const addCatch = (newCatch) => {
    setCatches([...catches, newCatch]); // Add new catch to the array
  };

  // Function to display each catch entry
  const displayCatch = (catchData) => (
    <div key={catchData.id}>
      <p>Species: {catchData.species}</p>
      <p>Weight: {catchData.weight} lbs</p>
      <p>Location: {catchData.location}</p>
      {/* Add image display if you have image data in catchData */}
      {/* <img src={catchData.imageUrl} alt={catchData.species} /> */}
      {/* Add functionality to delete or edit catch entries if needed */}
    </div>
  );

  return (
    <div>
      <h2>Catch Log</h2>
      {/* Form to add a new catch */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="species">Species:</label>
        <input type="text" id="species" required />
        <label htmlFor="weight">Weight (lbs):</label>
        <input type="number" id="weight" required />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" required />
        {/* Add input for image upload if desired */}
        {/* <input type="file" id="image" /> */}
        <button type="submit" onClick={() => {
          // Extract form data and create a new catch object
          const newCatch = {
            id: Math.random().toString(36).substring(2, 15), // Generate unique ID
            species: document.getElementById('species').value,
            weight: document.getElementById('weight').value,
            location: document.getElementById('location').value,
            // Add image data if implemented
          };
          addCatch(newCatch);
          // Clear the form after adding a catch (optional)
          document.getElementById('species').value = '';
          document.getElementById('weight').value = '';
          document.getElementById('location').value = '';
        }}>
          Add Catch
        </button>
      </form>
      {/* Display the list of catches */}
      {catches.length > 0 ? (
        <ul>
          {catches.map((catchData) => displayCatch(catchData))}
        </ul>
      ) : (
        <p>No catches logged yet.</p>
      )}
    </div>
  );
}

export default CatchLog;
