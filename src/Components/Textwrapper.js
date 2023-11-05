// Components/Textwrapper.js
import React from "react";

function Textwrapper({ text, color }) {
  const textStyle = {
    color: color,
     fontSize:'1.5rem'
  };

  return (
    <div id="text">
      <p style={textStyle}>{text}</p>
    </div>
  );
}

export default Textwrapper;
