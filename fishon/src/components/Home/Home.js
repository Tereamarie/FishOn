import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Fishing App!</h1>
      <p>Catch more fish and track your success.</p>
      <button>Log Your Catch</button>
      <button>See Fishing Forecast</button>
    </div>
  );
}

export default Home;
