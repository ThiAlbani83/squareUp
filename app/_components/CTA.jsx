import Image from 'next/image'
import React from 'react'
import Button from './Button'

function CTA({ logo, title, description }) {
    return (
        <section className='flex flex-col gap-[30px] lg:gap-[40px] xl:gap-[50px] px-[24px] md:px-[40px] lg:px-[60px] xl:p-[80px] py-[40px] lg:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col items-center gap-[24px] lg:flex-row lg:gap-[30px] xl:gap-[40px]'>
                <Image src={'/logo.jpg'} width={450} height={450} alt={'logo'} className='w-[58px] h-[58px] lg:w-[80px] lg:h-[80px] xl:w-[150px] xl:h-[150px]' />
                <div className='flex flex-col gap-[10px] lg:gap-[14px] xl:gap-[20px]'>
                    <h3 className='font-medium font-barlow text-gray60 text-[20px] lg:text-[24px] xl:text-[30px]'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
                    <p className='font-barlow text-gray60 text-[14px] lg:text-[16px] xl:text-[18px]'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className='bg-[#242424]/20 border border-gray15 rounded-md flex flex-col gap-5'>
                <h5 className='flex flex-col lg:justify-between lg:flex-row text-gray60 gap-[14px] text-center items-center p-[20px] text-[18px] font-barlow'>Welcome to SquareUp
                    <span className='text-white text-base flex flex-col gap-[20px] bg-gray15 px-[14px] py-[10px] rounded-md'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </span>
                    <Button primary={true} title={"Start Project"} />
                </h5>

            </div>
        </section>
    )
}

export default CTA