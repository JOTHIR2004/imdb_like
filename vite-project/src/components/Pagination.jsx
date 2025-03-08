import React from 'react'

function Pagination({pageNo,handleNext,handlePrev}) {
  return (
    <div className='bg-gray-400/60 p-4  mt-8 flex justify-center ' >
        <div className='px-8 hover:cursor-pointer font-bold hover:scale-110 duration-100' onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></div>
        <div className='px-8 font-bold'> {pageNo} </div>
        <div className='px-8 hover:cursor-pointer font-bold hover:scale-110 duration-100' onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination