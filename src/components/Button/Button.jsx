import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-md  rounded-xl mb-5 text-white md:py-2 md:px-6 py-1 px-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button
