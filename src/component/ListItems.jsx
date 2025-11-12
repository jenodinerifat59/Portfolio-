import React from 'react'

const ListItems = ({Items,className=''}) => {
  return (
    <div>
         <li className={className}>{Items}</li>
    </div>
  )
}

export default ListItems
