import Image from 'next/image'
import React from 'react'
import Button from '../Button'

function ClientOpinionCard({ title, description, icon, name, role }) {
    return (
        <div className='p-[30px] lg:px-[60px] lg:py-[30px] xl:px-[40px] xl:py-[60px] flex flex-col lg:gap-4 lg:justify-between gap-5 lg:h-[400px] border border-gray15'>
            <div className='flex flex-col gap-5'>
                <h4 className='font-barlow font-medium text-[18px] lg:max-w-[420px] text-green80 max-w-[400px]'>{title}</h4>

            </div>
            <p className='text-[14px] font-barlow text-gray90 max-w-[400px] lg:max-w-[600px]'>{description}</p>
            <div className='flex lg:w-full items-center justify-between px-[14px] py-[16px] bg-[#242424]/80 rounded-md'>
                <div className='flex gap-[10px]'>
                    <Image src={icon} width={40} height={40} alt={name} />
                    <div className='flex flex-col'>
                        <h5 className='font-medium text-[16px] text-white font-barlow'>{name}</h5>
                        <span className='text-[14px] font-barlow text-gray90'>{role}</span>
                    </div>
                </div>
                <button className='w-[150px] px-5 py-[18px] text-sm bg-gray15 text-white rounded-md shadow-md hidden lg:block'>Open Website</button>
            </div>
        </div>
    )
}

export default ClientOpinionCard