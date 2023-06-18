import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import TopRentals from './components/top-rentals'
import Button from './components/button'
import Footer from './components/footer'

import sample from './assets/book-cover/college_algebra.jpg'
import { books } from './data/Books'
import GetToKnow from './components/get-to-know'

function App() {
  const selectedBooks = [];
  const selectedNumbers = new Set();

  while (selectedNumbers.size < 3) {
    const randomNumber = Math.floor(Math.random() * books.length);
    if (!selectedNumbers.has(randomNumber)) {
      selectedNumbers.add(randomNumber);
      selectedBooks.push(books[randomNumber]);
    }
  }
  return (
    <div className='page-container'>
      <Navbar />
      {/*------------- Homepage hero -------------*/}
      <div className='mt-6 md:mt-20 lg:flex justify-between gap-8'>
        <div className='lg:w-1/2'>
          <h1 className='heading font-bold'>Find Your <span className=' block'>Next Book</span></h1>
          <p className='desc my-4'>Discover your next literary adventure on our comprehensive library website, where endless worlds await at your fingertips.</p>
          <Button>Explore Now</Button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 lg:mt-0 lg:w-1/2'>
          {books
          .filter((book) => [...selectedNumbers].includes(book.id))
          .map((selectedBook, index) => (
            <div key={selectedBook.id} className={`${index === 1 ? 'hidden sm:block' : 'block'}`}>
              <div className={`${index === 1 ? 'block' : 'hidden'}`}>
                <p className='font-bold text-center'>{selectedBook.title}</p>
                <p className='text-center mb-2'>{selectedBook.author}</p>
              </div>
              <img src={selectedBook.cover} alt="book cover" 
              className={`book hover:scale-105 duration-200 ${index === 1 ? 'rounded-b-full' : 'rounded-t-full'}`}/>
              <div className={`${index === 1 ? 'hidden' : 'block'}`}>
                <p className='font-bold text-center mt-2'>{selectedBook.title}</p>
                <p className='text-center'>{selectedBook.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TopRentals />

      <GetToKnow />
      <Footer />
    </div>
  )
}

export default App
