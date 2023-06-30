import React from 'react'

import { books } from '../../../data/Books'
import { ImBooks } from "react-icons/im";

import Button from '../../button'

function AllBooks({ query }) {
  return (
    <div className='books-layout mt-8'>
      {books.filter((books) => 
      books.title.toLowerCase().includes(query)||
      books.author.toLowerCase().includes(query)
      ).map((all_books) => (
        <div key={all_books.id} className='flex flex-col'>
          <img src={all_books.cover} alt="book cover" className='book w-full'/>

          <p className='desc font-semibold mt-2'>{all_books.title}</p>
          <p>by: <span className=' font-semibold'>{all_books.author}</span></p>
          <div className='mt-auto'>
            <Button>Rent <ImBooks /></Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllBooks