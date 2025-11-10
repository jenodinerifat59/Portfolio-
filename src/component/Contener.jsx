import React from 'react'

const Contener = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1180px] mx-auto  px-3 md:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Contener
