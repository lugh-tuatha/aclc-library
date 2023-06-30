import React from 'react'
import Navbar from '../../components/navbar'
import Search from '../../components/books/search'
import Footer from '../../components/footer'

function Books() {
  return (
    <div className='page-container'>
      <Navbar />
      <Search/>
      <Footer />
    </div>
  )
}

export default Books