import React from 'react'

import { books } from '../../data/Books'
import { ImBooks } from "react-icons/im";

import Button from '../../components/button'

function AllBooks() {
  return (
    <div className='grid grid-cols-5 gap-12 mt-12'>
      {books.map((all_books) => (
        <div className='flex flex-col'>
          <img src={all_books.cover} alt="book cover" className='h-80 w-full'/>

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