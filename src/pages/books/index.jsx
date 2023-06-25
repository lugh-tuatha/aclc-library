import React from 'react'
import Navbar from '../../components/navbar'
import Search from '../../components/search'
import Tabs from '../../components/tabs'
import AllBooks from '../../components/all-books'
import Footer from '../../components/footer'

function Books() {
  return (
    <div className='page-container'>
      <Navbar />
      <Search />
      <Tabs />
      <AllBooks />
      <Footer />
    </div>
  )
}

export default Books