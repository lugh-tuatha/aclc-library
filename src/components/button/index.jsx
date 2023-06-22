import React from 'react'
import '../../index.css'

function Button(props) {
  return (
    <button className='px-6 py-2 text-lg bg-primary-100 cursor-pointer font-semibold text-white rounded-md hover:bg-primary-500 flex-middle gap-2 shadow-md active:scale-90 transition-transform duration-200'>{props.children}</button>
  )
}

export default Button