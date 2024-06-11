import Button from '@/app/_components/Button'
import Image from 'next/image'
import React from 'react'

function OpeningsCards({ icon, title, description }) {
    return (
        <div className='px-[20px] lg:px-[40px] xl:px-[40px] py-10 flex flex-col justify-between gap-[14px] lg:gap-[20px] xl:gap-[24px] border border-gray15'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-start gap-[14px]'>
                    <Image src={icon} width={58} height={58} alt={icon} />
                    <h4 className='font-barlow font-semibold text-white text-[16px] lg:text-[20px] xl:text-[24px] leading-[45px]'>{title}</h4>
                </div>
                <p className='text-gray90 text-[14px] leading-[32px] font-light font-barlow max-w-[400px] lg:max-w-[650px] xl:max-w-[480px]'>
                    {description}
                </p>
            </div>
            <Button title={"Apply Now"} />
        </div>
    )
}

export default OpeningsCards