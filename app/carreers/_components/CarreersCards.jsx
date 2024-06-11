import React from 'react'

function CarreersCards({ title, description }) {
    return (
        <div className='p-[24px] lg:p-[40px] xl:p-[80px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[50px] border border-gray15'>
            <span className='text-green80 text-[26px] lg:text-[32px] xl:text-[40px] font-barlow font-medium w-full border-b border-b-gray15 pb-4'>{title}</span>
            <p className='text-gray60 text-[14px] leading-[150%] lg:text-[16px] xl:text-[18px] font-barlow'>{description}</p>
        </div>
    )
}

export default CarreersCards