import React from 'react'
import { books } from '../../data/Books'
import { ImBooks } from "react-icons/im";
import Button from '../button'

function TopRentals() {
  return (
    <div className='mt-12'>
      <h1 className='title font-bold mb-4'>Most Popular Rental</h1>

      <div className='books-layout'>
        {books
          .filter((book) => book.popular)
          .map((popular_books) => (
          <div>
            <img src={popular_books.cover} alt="book cover" className='book w-full' />

            <p className='desc font-semibold mt-2'>{popular_books.title}</p>
            <p className='mb-2'>by: <span className=' font-semibold'>{popular_books.author}</span></p>
            <Button>Rent <ImBooks /></Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRentals