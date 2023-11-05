import React from 'react';

function Wrapper({ author , color}) {
  const textStyle = {
    color: color,
    float:'right'
  };
  return (
    <div id="author" style={textStyle}>
      {author ? `- ${author}` : 'Author: Unknown'}
    </div>
  );
}

export default Wrapper;
