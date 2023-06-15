import React from 'react'

import SearchBanner from '../../assets/banner/search-banner.jpg'

import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div>
      <div className='w-2/3 mx-auto'>
        <img src={SearchBanner} alt="" className='rounded-3xl'/>
        <div className='relative bottom-8 mx-auto flex items-center text-gray-400 focus-within:text-gray-600 w-1/2'>
          <AiOutlineSearch className='w-7 h-7 absolute ml-3 pointer-events-none'/>
          <input type="text" name='search' placeholder='Search books' autoComplete='off' className='text-xl w-full pl-12 py-4 search-input'/>
        </div>
      </div>
    </div>
  )

}

export default Search