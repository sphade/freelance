import React from 'react'
import Button from './Button'

const Header = () => {
  return (
      <div className='flex shadow  py-3 items-center justify-between px-12'>
          <h1 className='font-bold text-xl uppercase'>lawal adebola</h1>
          <ul className='flex gap-5 text-lg capitalize font-semibold '>
              <li>
                  about us
              </li>
              <li>
                  our team
              </li>
              <li>
                  services 
              </li>
              <li>
                  contact us
              </li>
          </ul>
          <Button>
          book a ride
          </Button>
          

    </div>
  )
}

export default Header