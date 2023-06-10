import React from 'react'

import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className='container mx-auto flex justify-between'>
      <div className='flex gap-20'>
        <img src={logo} alt="logo" className='w-44'/>

        <ul className='flex gap-8 font-bold text-lg items-center'>
          <li>Home</li>
          <li>About</li>
          <li>Books</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className='flex items-center gap-8'>
        <input type="search" name="" id="" className='border-2 border-primary'/>

        <button>Contact us</button>
      </div>

    </nav>
  )
}

export default Navbar