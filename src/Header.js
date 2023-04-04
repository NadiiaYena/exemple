import React from "react";
import "./Header.css"


function Header() {
  return (
    <>
    <div className="App-input">
      <div className="App-input-block">
        <p>Name:</p>
        <input type = "text" />
      </div>
      <div className="App-input-block">
        <p>Date of birth:</p>
        <input type = "date" />
      </div>
      <div className="App-input-block">
        <p>Address:</p>
        <input type = "text" />
      </div>
    </div>
    </>
  );
}

export default Header;