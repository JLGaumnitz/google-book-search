import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      // This line was in the Activity for the Reading List:
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron mt-4"
    >
      {children}
      
    </div>
  );
}

export default Jumbotron;
