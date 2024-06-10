import Image from 'next/image'
import React from 'react'

function WorkCard({ title, image, worktitle, tag, description }) {
    return (
        <div className=''>
            <div className='pt-[40px] flex flex-col gap-2 border-y border-y-gray15 pb-10 px-10'>
                <h2 className='text-gray60 font-barlow font-medium text-base lg:text-lg'>{title}</h2>
            </div>
            <div className='flex flex-col px-[30px] border-l border-l-gray15 pt-[30px] pb-[80px] gap-6 w-full h-full'>
                <div>
                    <Image src={image} width={500} height={500} className='w-full' alt='image' />
                </div>
                <div className='w-full flex items-end justify-between'>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='font-barlow font-medium text-gray90 text-2xl'>{worktitle}</span>
                        <span className='p-[10px] bg-gray15 text-gray60 font-barlow text-sm md:text-base lg:text-lg rounded-md w-fit'>{tag}</span>
                    </div>
                    <Image src={'/arrow-icon.png'} width={46} height={46} alt='arrow-icon'/>
                </div>
                <p className='text-[14px] font-barlow text-gray60 max-w-[400px] lg:max-w-[600px]'>{description}</p>
            </div>
        </div>
    )
}

export default WorkCard