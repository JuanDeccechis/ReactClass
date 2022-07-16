//Button.js
import React from 'react';

const Button = (props) => {
  return (
    <button
      className='button'
      onClick={props.onPress}
    >
      {props.children}
    </button>
  );
}

export default Button;