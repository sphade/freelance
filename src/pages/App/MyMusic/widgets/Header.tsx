import React from 'react'
import { Tabs } from '../../../../components'

const Header = () => {
  return (
    <div className="sticky top-0 py-5  bg-white z-10">
    <h1 className="text-4xl font-light">My music</h1>
    <Tabs
        
        option={["song", "artist", "album"]}
            />  
    <div className="text-xs flex capitalize items-center gap-5">
      <p>shuffle all (35)</p>
      <p>
        sort by : <span className="text-orange-700 ">date added</span>
      </p>
      <p>
        genre : <span className="text-orange-700 ">all genres</span>
      </p>
    </div>
  </div>
  )
}

export default Header