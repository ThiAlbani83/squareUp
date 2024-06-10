import React from 'react'

function ProcessCard({ number, title, description }) {
      return (
            <div className='p-[20px] lg:p-[40px] flex flex-col gap-[20px] border border-gray15'>
                  <div className='flex items-center gap-[10px] lg:gap-[14px]'>
                        <h1 className='text-green80 text-[80px] lg:text-[120px] xl:text-[150px] font-semibold font-barlow'>{number}</h1>
                        <span className='text-gray60 text-[20px] lg:text-[24px] xl:text-[30px] font-barlow font-medium w-full border-b border-b-gray15 pb-4'>{title}</span>
                  </div>

                  <p className='text-gray60 text-[14px] leading-[150%] lg:text-[16px] xl:text-[18px] font-barlow'>{description}</p>
            </div>
      )
}

export default ProcessCard