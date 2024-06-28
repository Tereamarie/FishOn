import React from "react";
import Header from './Components/Header.js';
import TopBar from './Components/TopBar.js';
import CatchLog from './Components/CatchLog/catchLog.js';
import LogIn from './Components/LogIn.js';
const App = () => (
  <div className="App">
    <Header />
    <TopBar />
    <CatchLog />
    <LogIn/>
  </div>
);

export default App;
