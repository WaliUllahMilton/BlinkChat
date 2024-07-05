import React from 'react'

const Input = ({type,name,ref,value,placeholder,className,onChange}) => {
  return (
    <input type={type} name={name} ref={ref} value={value}
    className={`border-2 border-red-600 ${className} w-[300px] h-7 text-center px-3 py-2  outline-none `}
    onChange={onChange}
    placeholder={placeholder}
    />
  )
}

export default Input