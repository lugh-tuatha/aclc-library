import React from 'react'
import Navbar from '../../components/navbar'
import Search from '../../components/search'
import Tabs from '../../components/tabs'
import AllBooks from '../../components/all-books'

function Books() {
  return (
    <div className='page-container'>
      <Navbar />
      <Search />
      <Tabs />
      <AllBooks />
    </div>
  )
}

export default Books