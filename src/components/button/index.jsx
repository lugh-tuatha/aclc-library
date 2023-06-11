import React from 'react'

function Button(props) {
  return (
    <div className='px-4 py-2 bg-primary rounded-md cursor-pointer'>{props.children}</div>
  )
}

export default Button