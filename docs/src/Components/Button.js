import React from 'react'

function Button({children, clickHandler, backgroundColor}) {
  const Styles = {
    backgroundColor: backgroundColor,
    padding:'.5rem',
    border:'0',
    borderRadius:'5px',
    color:'white',
    float:'right'
  };
  return (
    <button id='new-quote' style={Styles} onClick={clickHandler}>{children}</button>
  )
}

export default Button