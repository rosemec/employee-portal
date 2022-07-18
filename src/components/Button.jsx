import React from 'react'

const Button = (props) => {
    const {className, label, handleClick} = props;
  return (
    <button className={className}  onClick={handleClick}>
        {label}
    </button>
  )
}

export default Button
