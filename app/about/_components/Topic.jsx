import React from 'react'

function Topic({title}) {
  return (
    <div className='pt-[40px] md:pt-[80px] flex flex-col gap-2 pb-10 px-10 border-t border-t-gray15'>
    <h1 className='text-[28px] font-barlow md:text-[38px] lg:text-[48px] text-white'>{title}</h1>
  </div>
  )
}

export default Topic