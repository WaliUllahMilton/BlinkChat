import React from 'react'

const UserHome = () => {
  return (
    <section className='bg-orange-200 py-2'>
      <div className='flex max-w-container mx-auto justify-between items-center'>
      <div className='flex gap-6 items-center'>
      <h1 className="text-[20px]  font-bold text-rose-500">Blink<span className="text-blue-500">Chat</span></h1>
      <div className='w-[300px] h-6 border rounded-[6px] overflow-hidden'>
        <input type="text" 
        className='outline-none w-full h-full pl-4 '
        placeholder='Search'/>
      </div>
      </div>
      <div className='flex gap-6 items-center'>
      <div>friends</div>
        <div>chat</div>
        <div>suggested </div>
        <div>profile </div>
        <div>Log Out </div>
      </div>
    </div>
    </section>
    
  )
}

export default UserHome;