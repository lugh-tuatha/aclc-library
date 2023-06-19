import React from 'react'

import Sample from '../../assets/book-cover/jose_rizal.jpg'
import { AuthorInfo } from '../../data/AuthorInfo'

function GetToKnow() {
  return (
    <div className='mt-8'>
      <h1 className='title font-bold mb-4'>Get to know</h1>
      <div className=' bg-accent xl:flex h-80'>
        {AuthorInfo.map((author, index) => (
          <div className={`xl:mt-0 mt-5 xl:w-1/2 p-4 xl:flex justify-center text-text_white ${index === 0 ? 'block' : 'hidden'}`}>
            <div className='border-b border-l border-white border-opacity-50 h-auto self-start sm:w-1/2 mt-8 mr-8 pb-4 pl-4'>
              <h2 className='font-bold opacity-60'>Name: </h2>
              <p className=' text-xl font-bold'>{author.name}</p>

              <h2 className='font-bold opacity-60'>About the author:</h2>
              <p>{author.about}</p>
            </div>
            <img src={author.image} alt="" className='rounded-b-full h-96 book hidden sm:block' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetToKnow