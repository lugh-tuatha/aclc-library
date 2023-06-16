import React, { useState } from 'react'
import './navbar.css'

import logo from '../../assets/logo.png'
import * as Ai from "react-icons/ai";

import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../data/NavLinks'

import Button from '../button'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='cursor-pointer py-4'>
      <div className='flex-between gap-20 w-full'>
        <img src={logo} alt="logo" className='w-44'/>

        {/*------------- Mobile Menu -------------*/}
        <div className='md:hidden flex-middle text-4xl' onClick={() => setOpen(!open)}>
          {open ? <Ai.AiOutlineClose /> : <Ai.AiOutlineMenu /> }
        </div>

        <ul className='hidden md:flex gap-8 font-semibold text-lg items-center'>
          {NavLinks.map((links) => (
            <li>
              <NavLink to={links.link}>{links.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center gap-8'>
          {/*------------- Search input -------------*/}
          <div className='hidden lg:flex search-container'>
            <Ai.AiOutlineSearch className='search-icon'/>
            <input type="text" name='search' placeholder='Search books' autoComplete='off' className='search-padding search-input'/>
          </div>

          <Button>Contact us</Button>
        </div>
      </div>

      {/*------------- Mobile links -------------*/}
      <div className={`md:hidden absolute w-full z-10 h-full bg-white duration-500 ${open ? 'right-0' : '-right-full'}`}>
        <div className='w-11/12 mx-auto'>
          <div className='flex search-container my-4'>
            <Ai.AiOutlineSearch className='search-icon'/>
            <input type="text" name='search' placeholder='Search books' autoComplete='off' className='search-padding w-full mx-auto search-input'/>
          </div>

          <ul className='font-semibold text-lg'>
            {NavLinks.map((links) => (
              <li className='mb-4'>
                <NavLink to={links.link}>{links.name}</NavLink>
              </li>
            ))}
          </ul>

          <div>
            <Button>Contact us</Button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar