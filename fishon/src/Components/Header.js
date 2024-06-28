import React from "react";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
  
    return (
      <div className="header">
        <span className="date">{date}</span>
  
        <h1>FishOn! </h1>
        <span className="temp">98°</span>
      </div>
    );
  };
  
  export default Header;
  
