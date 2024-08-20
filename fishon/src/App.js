import React from "react";
import TopBar from "./Components/TopBar/TopBar.js";
import Header from "./Components/Header/Header.js";
import Content from "./Components/Content/Content";
import FishPopulation from "./Components/FishPopulation/fishPop.js";
const App = () => {
  return (
    <div className="App">
      {/* <img className="image" src={myImage} alt="Fishing cutting board" /> */}
      <TopBar />
      <Header />
      <Content />
      <FishPopulation />
    </div>
  );
};

export default App;
