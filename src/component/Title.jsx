import React from 'react'
import Contener from './Contener'

const Title = ({head_title , sub_title}) => {
  return (
    <div className='text-center'>
      
      <h2 className='font-medium sm:font-semibold md:font-bold text-5xl mb-2 md:mb-4'>{head_title}</h2>
      <p className= 'font-normal md:font-medium text-xl'>{sub_title}</p>  
      
    </div>
  )
}

export default Title
