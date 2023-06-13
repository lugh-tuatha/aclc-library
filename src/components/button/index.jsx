import React from 'react'
import '../../index.css'

function Button(props) {
  return (
    <button className='px-6 py-2 text-lg rounded-md bg-primary-100 cursor-pointer font-semibold hover:underline hover:bg-primary-500'>{props.children}</button>
  )
}

export default Button