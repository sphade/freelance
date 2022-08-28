import React from 'react'

const Button = ({ children }:{children:string}) => {
  return (
      <button className=' rounded-lg px-2.5 py-2 font-bold bg-primary text-white text-base capitalize '>
          {children}
   </button>
  )
}

export default Button