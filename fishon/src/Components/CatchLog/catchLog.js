import React, { useState } from 'react';

const CatchLog = () => {
  const [fishImage, setFishImage] = useState(null);

  const handleImageUpload = (event) => {
    setFishImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <form className="catch-log">
      <label htmlFor="fishSpecies">Species:</label>
      <input type="text" id="fishSpecies" name="fishSpecies" required />
      <label htmlFor="fishWeight">Weight (lbs):</label>
      <input type="number" id="fishWeight" name="fishWeight" required />
      <label htmlFor="fishLength">Length (in):</label>
      <input type="number" id="fishLength" name="fishLength" required />
      <label htmlFor="fishPhoto">Catch Photo:</label>
      <input type="file" id="fishPhoto" name="fishPhoto" onChange={handleImageUpload} />
      {fishImage && <img src={fishImage} alt="Fish Catch" className="fish-photo" />}
      <button type="submit">Log Catch</button>
    </form>
  );
};

const styles = {
  catchLog: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  fishPhoto: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
  },
};

export default CatchLog;
