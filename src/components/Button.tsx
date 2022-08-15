import React from 'react'

const Button = ({ children }:{children:string}) => {
  return (
      <button className=' rounded px-5 py-4 font-bold bg-primary text-white text-lg capitalize '>
          {children}
   </button>
  )
}

export default Button