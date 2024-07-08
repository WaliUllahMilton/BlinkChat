import React from 'react'

const Input = ({type,name,ref,value,placeholder,className,onChange}) => {
  return (
    <input type={type} name={name} ref={ref} value={value}
    className={`border-2 border-red-600 ${className} w-[300px] h-7 px-3 py-6  outline-none rounded-md`}
    onChange={onChange}
    placeholder={placeholder}
    />
  )
}

export default Input