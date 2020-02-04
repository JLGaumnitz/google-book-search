import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      // The following code was in the Activity for the Reading List (may or may not need):
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron mt-4"
    >
      {children}
      
    </div>
  );
}

export default Jumbotron;
