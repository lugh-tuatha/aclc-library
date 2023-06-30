import React, { useState } from 'react'

import { category } from '../../../data/category'

function Tabs() {
  const [active, setActive] = useState("All")

  const handleClick = (genre) => {
    setActive(genre);
  };

  return (
    <div className='flex-center gap-4 cursor-pointer'>
      {category.map((filter)=> (
        <div key={filter.id}
          onClick={() => handleClick(filter.genre)}
          className={`py-2 px-8 font-bold rounded-full ${active === filter.genre ? ' bg-primary-100' : ''}`}>
          <p>{filter.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default Tabs