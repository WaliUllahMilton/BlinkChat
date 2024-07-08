/* eslint-disable react/prop-types */
import React from 'react'

const Button = ({text,className,onClick}) => {
  return (
    <button className={`py-2 px-6 bg-green-400 text-white font-bold text-base border-[1px] rounded-xl capitalize ${className}`
    }
    onClick={onClick}
    >
        {text}
      </button>
  )
}

export default Button