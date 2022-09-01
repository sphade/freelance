import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SearchBar = () => {
  return (
      <div className='rounded-xl bg-gray-200 flex items-center px-3 h-10 py-2'>
        <MagnifyingGlassIcon className='h-6 w-6 pr-1 text-gray-600'/>
          <input type="text" className='h-full flex-1 bg-transparent outline-none' placeholder='Search' />
    </div>
  )
}

export default SearchBar