import React from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import RegistrationForm from "../RegistrationForm/RegistrationForm";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file


function TopBar() {
  return (
    <Router>
      
      <div className="top-bar">
         
        <div className="top-bar container">
          <div className="top-bar container container-left">
            <div className="top-bar container container-left span">
              <div className="top-bar container container-center">
                <div className="top-bar container container-center span">
                  <div className="top-bar container container-center span:last-child">
                    <div className="top-bar container container-center span:hover">
                      <div className="top-bar container container-right">
                        <div className="top-bar container container-right span">
          
          <span>Zone Regs</span>


          <span>Lures</span>
          <span>Fish Population</span>
          <span>Maps</span>
        
          <span type='submit'>LOG IN </span>
          <span>Register</span>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>
    </div>
         
        
      
    </Router>
  );
}

export default TopBar;
