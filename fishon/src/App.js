import React from "react";
import TopBar from "./Components/TopBar/TopBar.js";
import Header from "./Components/Header/Header.js";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default App;
