import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import TopRentals from './components/top-rentals'
import Button from './components/button'
import Footer from './components/footer'

import sample from './assets/book-cover/college_algebra.jpg'
import { books } from './data/Books'

function App() {
  let randomBooks = Math.random()
  console.log(randomBooks)
  return (
    <div className='page-container'>
      <Navbar />
      <div className='mt-6 md:mt-20 flex-between'>
        <div className='md:w-1/2'>
          <h1 className='heading font-bold'>Find Your <span className=' block'>Next Book</span></h1>
          <p className='desc my-4'>Lorem ipsum Lorem ipsum dolor sit amet. dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Expedita, adipisci?</p>
          <Button>Explore Now</Button>
        </div>

        <div className='grid grid-cols-3 gap-12'>
          <div>
            <img src={sample} alt="sample" className='w-64 rounded-t-full'/>
            <p className='font-bold text-center mt-2'>College Algebra</p>
            <p className='text-center'>Nora A. Oredina</p>
          </div>
          <div>
            <p className='font-bold text-center mb-2'>College Algebra</p>
            <p className='text-center'>Nora A. Oredina</p>
            <img src={sample} alt="sample" className='w-64 rounded-b-full'/>
          </div>
          <div>
            <img src={sample} alt="sample" className='w-64 rounded-t-full'/>
            <p className='font-bold text-center mt-2'>College Algebra</p>
            <p className='text-center'>Nora A. Oredina</p>
          </div>
        </div>
      </div>

      <TopRentals />
      <Footer />
    </div>
  )
}

export default App
