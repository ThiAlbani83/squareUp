import Image from 'next/image'
import React from 'react'

function ServicesCard({image, title}) {
  return (
    <div className='p-[20px] lg:p-[40px] flex flex-col gap-[20px] border border-gray15'>
          <Image src={image} width={56} height={56} alt='icon' />
          <span className='font-medium font-barlow text-base text-white'>{title}</span>
        </div>
  )
}

export default ServicesCard