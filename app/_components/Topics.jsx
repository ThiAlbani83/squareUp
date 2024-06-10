import React from 'react'

function Topics({title, description, tag}) {
  return (
    <div className='pt-[40px] md:pt-[80px] lg:pt-[120px] flex flex-col gap-2 pb-10 px-10'>
      <h1 className='text-[28px] font-barlow md:text-[38px] lg:text-[48px] text-white'>{title}</h1>
      <p className='text-gray60 font-barlow text-[14px] leading-[30px] md:text-base lg:text-lg md:max-w-[700px] lg:max-w-[1150px]'>{description}</p>
      <span className='p-[10px] bg-gray15 text-white font-barlow text-sm md:text-base lg:text-lg rounded-md w-fit mt-10'>{tag}</span>
    </div>
  )
}

export default Topics