import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

import Button from './components/button'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='mt-20'>
        <div className='w-1/2'>
          <h1 className='heading font-bold'>Find Your <span className=' block'>Next Book</span></h1>
          <p className='desc my-4'>Lorem ipsum Lorem ipsum dolor sit amet. dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Expedita, adipisci?</p>
          <Button>Explore Now</Button>
        </div>
      </div>
    </div>
  )
}

export default App
