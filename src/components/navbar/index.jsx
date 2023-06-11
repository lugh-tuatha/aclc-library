import React from 'react'
import './navbar.css'

import logo from '../../assets/logo.png'
import { AiOutlineSearch } from "react-icons/ai";

import { NavLink } from 'react-router-dom';

import Button from '../button'

function Navbar() {
  return (
    <nav className='container mx-auto flex justify-between cursor-pointer py-4'>
      <div className='flex gap-20'>
        <img src={logo} alt="logo" className='w-44'/>

        <ul className='flex gap-8 font-semibold text-lg items-center'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-8'>

        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
          <AiOutlineSearch className='w-5 h-5 absolute ml-3 pointer-events-none'/>
          <input type="text" name='search' placeholder='Search books' autoComplete='off' className='pr-3 pl-10 py-2 font-semibold placeholder-gray-500 rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 outline-none'/>
        </div>


        <Button>Contact us</Button>
      </div>

    </nav>
  )
}

export default Navbar