import React from 'react';
import './home.css';
function Home() {
const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <div className="header">
    <div className="container">
      
      <h1>Welcome to the Fishing App!</h1>
      <p>Catch more fish and track your success.</p>
      <button>Log Your Catch</button>
      <button>Weather Forcast</button>
     {/* <img src="fishingpic.jpg" ></img> */}
     <span className="date">{date}</span><br></br>
     <span className="temp">98°</span>
    </div>
    </div>
  );
}

export default Home;
