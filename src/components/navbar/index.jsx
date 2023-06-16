import React, { useState } from 'react'
import './navbar.css'

import logo from '../../assets/logo.png'
import * as Ai from "react-icons/ai";

import { NavLink } from 'react-router-dom';

import Button from '../button'

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <nav className='container mx-auto cursor-pointer py-4'>
      <div className='flex justify-between gap-20 w-full'>
        <img src={logo} alt="logo" className='w-44'/>

        {/*------------- Mobile Menu -------------*/}
        <div className='flex md:hidden items-center text-4xl' onClick={() => setOpen(!open)}>
          {open ? <Ai.AiOutlineMenu /> : <Ai.AiOutlineClose />}
        </div>

        <ul className='hidden md:flex gap-8 font-semibold text-lg items-center'>
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

        <div className='hidden md:flex items-center gap-8'>
          {/*------------- Search input -------------*/}
          <div className='relative hidden lg:flex items-center text-gray-400 focus-within:text-gray-600'>
            <Ai.AiOutlineSearch className='w-5 h-5 absolute ml-3 pointer-events-none'/>
            <input type="text" name='search' placeholder='Search books' autoComplete='off' className='pr-3 pl-10 py-2 search-input'/>
          </div>

          <Button>Contact us</Button>
        </div>
      </div>

      {/*------------- Mobile links -------------*/}
      <div className={`absolute container w-11/12 z-10 h-full bg-white ${open ? 'opacity-0' : 'opacity-1'}`}>
        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600 my-4'>
          <Ai.AiOutlineSearch className='w-5 h-5 absolute ml-3 pointer-events-none'/>
          <input type="text" name='search' placeholder='Search books' autoComplete='off' className='pr-3 pl-10 py-2 w-full mx-auto search-input'/>
        </div>

        <ul className='font-semibold text-lg flex flex-col gap-4'>
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

        <div className='mt-4'>
          <Button>Contact us</Button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar