import React from 'react'
import Navbar from '../../components/navbar'
import Search from '../../components/search'
import Tabs from '../../components/tabs'

function Books() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Search />
      <Tabs />
    </div>
  )
}

export default Books