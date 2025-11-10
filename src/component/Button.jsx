import React from 'react'

const Button = ({Items, className="",onClick}) => {
  return (
    <button onClick={onClick} className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${className}`}>{Items}</button>
  )
}

export default Button
