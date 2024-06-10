import Image from 'next/image'
import React from 'react'

function AboutSection({ title, description, image }) {
    return (
        <div className='w-full pt-[40px] md:pt-[80px] lg:pt-[120px] flex flex-col gap-[30px] pb-10 px-4 lg:flex-row items-center justify-center  lg:max-w-full'>
            <div className='w-full flex flex-col gap-4 lg:gap-5 justify-center items-center lg:items-start lg:px-[100px]'>
                <h1 className='text-[28px] font-barlow md:text-[38px] lg:text-[48px] text-white'>{title}</h1>
                <p className='text-gray90 font-barlow text-[14px] leading-[30px] md:text-base lg:text-lg max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]'>{description}</p>
            </div>
            <div className='w-full flex justify-center'>
                <Image src={image} width={450} height={450} alt='about-image' />
            </div>
        </div>
    )
}

export default AboutSection