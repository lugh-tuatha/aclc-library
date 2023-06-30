import React, { useState } from 'react'

import SearchBanner from '../../../assets/banner/search-banner.jpg'

import Tabs from '../tabs';
import AllBooks from '../all-books';

import { AiOutlineSearch } from "react-icons/ai";

import { books } from '../../../data/Books'

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className='lg:w-2/3 mx-auto'>
        <img src={SearchBanner} alt="" className='rounded-3xl'/>
        <div className='lg:relative bottom-9 mx-auto flex-middle text-gray-400 focus-within:text-gray-600 lg:w-1/2 my-3'>
          <AiOutlineSearch className='w-7 h-7 absolute ml-3 pointer-events-none'/>
          <input type="text" name='search' placeholder='Search books' autoComplete='off' 
          onChange={e => setQuery(e.target.value)} 
          className='text-xl w-full pl-12 py-2 md:py-3 search-input'/>
        </div>
      </div>

      <Tabs />
      <AllBooks query={query}/>
    </div>
  )
}

export default Search