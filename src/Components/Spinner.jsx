import React from 'react'

const Spinner = () => {
  return (
    <div className=' fixed flex items-center justify-center right-4 bottom-0  w-full  text-white h-screen z-50 '>
             <div className='w-14 h-14 rounded-full border-4 
              border-r-blue-500 animate-spin'>
             </div>
    </div>
  )
}

export default Spinner